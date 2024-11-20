export function saveTokenLocalStorage(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getTokenLocalStorage() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeTokenLocalStorage() {
  return localStorage.removeItem(TOKEN_KEY);
}
