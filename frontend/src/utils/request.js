import axios from "axios";
import qs from "qs";
import { BASE_URL, CLIENT_ID, CLIENT_SECRET, TOKEN_KEY } from "./system";
import * as localStorageRequests from "./localStorage";

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

export function logout() {
  localStorageRequests.removeTokenLocalStorage;
}

export function saveAccessToken(token) {
  localStorageRequests.saveTokenLocalStorage(token);
}

export function getAccessToken(token) {
  localStorageRequests.getTokenLocalStorage(token);
}
