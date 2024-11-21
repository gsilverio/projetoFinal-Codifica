import axios from "axios";
import qs from "qs";
import { BASE_URL, CLIENT_ID, CLIENT_SECRET, TOKEN_KEY } from "./system";
import * as localStorageRequests from "./localStorage";
import { Navigate, useNavigate } from "react-router-dom";
import { history } from "./history";
import { jwtDecode } from "jwt-decode";

export const roleEnum = "ROLE_ADMIN" | "ROLE_OPERATOR";

export function loginRequest(loginData) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };
  const data = qs.stringify({ ...loginData, grant_type: "password" });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth2/token",
    data,
    headers,
  });
}

export function requestBackEnd(config) {
  const headers = config.withCredentials
    ? {
        ...config.header,
        Authorization:
          "Bearer " + localStorageRequests.getAuthData().access_token,
      }
    : {};
  return axios({ ...config, baseURL: BASE_URL, headers });
}

export function logout() {
  localStorageRequests.removeTokenLocalStorage();
}

export function saveAccessToken(token) {
  localStorageRequests.saveTokenLocalStorage(token);
}

export function getAccessToken(token) {
  localStorageRequests.getTokenLocalStorage(token);
}

export function getAccessTokenPayload() {
  try {
    const token = localStorageRequests.getAuthData().access_token;
    return token == null ? undefined : jwtDecode(token);
  } catch (error) {
    return undefined;
  }
}

export function isAuthenticated() {
  let tokenPayload = getAccessTokenPayload();

  return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}

export const hasAnyRoles = (roles = []) => {
  if (roles.length === 0) {
    return true;
  }

  const tokenData = localStorageRequests.getAuthData();
  if (tokenData !== undefined) {
    for (var i = 0; i < roles.length; i++) {
      if (tokenData.authorities?.includes(roles[i])) {
        return true;
      }
    }
  }
  return false;
};

export const hasRole = () => {
  const tokenData = localStorageRequests.getAuthData();

  if (!tokenData || !tokenData.authorities) {
    return false; // Retorna false se não houver dados de autenticação ou authorities
  }

  // Verifica se o único papel na lista de authorities é 'ROLE_OPERATOR'
  return (
    tokenData.authorities.length === 1 &&
    tokenData.authorities[0] === "ROLE_OPERATOR"
  );
};

export const hasRoleAdmin = () => {
  const tokenData = localStorageRequests.getAuthData();

  if (tokenData !== undefined && Array.isArray(tokenData.authorities)) {
    console.log("Authorities:", tokenData.authorities); // Verificando authorities

    // Verifica se ROLE_ADMIN está presente nas authorities de forma insensível a maiúsculas/minúsculas
    return tokenData.authorities.some(
      (role) => role.toUpperCase() === "ROLE_ADMIN"
    );
  }

  return false;
};

export const printAuthorities = () => {
  const tokenData = localStorageRequests.getAuthData();
  console.log("Authorities:", tokenData?.authorities);
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.log("401");
      history.push("/login");
    }
    if (error.response.status === 403) {
      history.push("/home");
    }
    return Promise.reject(error);
  }
);
