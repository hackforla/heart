import { saveAuthToken, loadAuthToken, clearAuthToken } from '../utilities/localStorage';
import { UserAuthApi } from '../api/userAuth.api';

function login(username, password) {
  return UserAuthApi.loginApi(username, password);
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

function setAuthToken(authToken) {
  return saveAuthToken(authToken);
}

function getAuthToken() {
  const authToken = loadAuthToken();
  return authToken;
}

function refreshAuthToken() {
  UserAuthApi.refreshAuthTokenApi();
}

export const UserAuth = {
  login,
  logout,
  loggedIn,
  setAuthToken,
  getAuthToken,
  refreshAuthToken,
};