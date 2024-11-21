import { TOKEN_KEY } from "./system";

export function saveTokenLocalStorage(token) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function getTokenLocalStorage() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeTokenLocalStorage() {
  return localStorage.removeItem(TOKEN_KEY);
}

export function getAuthData() {
  const str = getTokenLocalStorage() ?? "{}";
  const obj = JSON.parse(str);
  return obj;
}
