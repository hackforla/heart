import { loadAuthToken, clearAuthToken } from '../utilities/localStorage';
import { userAuthApi } from '../api/userAuth.api';

function login(username, password) {
  return userAuthApi.loginApi(username, password);
}

function logout() {
  // remove user from local storage to log user out
  clearAuthToken();
}

function loggedIn() {
  // Checks if there is a saved authToken in local storage
  const authToken = loadAuthToken();
  return authToken !== null ? true : false;
}

function getAuthToken() {
  const authToken = loadAuthToken();
  return authToken;
}

export const userAuth = {
  login,
  logout,
  loggedIn,
  getAuthToken,
};