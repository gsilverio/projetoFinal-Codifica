import { TOKEN_KEY } from "./system";
import { CART_KEY } from "./system";

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

export function saveCartLocalStorage(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCartLocalStorage() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function removeCartLocalStorage() {
  localStorage.removeItem(CART_KEY);
}