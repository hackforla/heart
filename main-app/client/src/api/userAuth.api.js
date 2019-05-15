import {normalizeResponseErrors } from '../utilities/errorsUtils'
//import { API_ENDPOINT } from 'get_uri';
import { API_BASE_URL } from '../config/url_config';
import { saveAuthToken } from '../utilities/localStorage';
import { UserAuth } from '../utilities/auth'

function loginApi(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  };

  return (fetch(`${API_BASE_URL}/login`, requestOptions)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => {
      const {
        code
      } = err;
      const message =
        code === 401 ?
        'Incorrect username or password' :
        'Unable to login, please try again';
      // Could not authenticate return error message to the form
      return Promise.reject(message);
    })
  );
}

function refreshAuthTokenApi () {
  //dispatch(authRequest());
  const authToken = UserAuth.getAuthToken();
  return fetch(`${API_BASE_URL}/refresh`, {
      method: 'POST',
      headers: {
          // Provide our existing token as credentials to get a new one
          Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(res => {
        saveAuthToken(res.authToken);
        return res;
      })
      .catch(err => {
          // We couldn't get a refresh token because our current credentials
          // are invalid or expired, or something else went wrong, so clear
          // them and sign us out
          UserAuth.logout();
      });
};

export const UserAuthApi = {
  loginApi,
  refreshAuthTokenApi,
};