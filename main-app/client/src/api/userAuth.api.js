import {normalizeResponseErrors } from '../utilities/errorsUtils'
//import { API_ENDPOINT } from 'get_uri';
import { API_BASE_URL } from '../config/url_config';
import { saveAuthToken } from '../utilities/localStorage';

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
      saveAuthToken(res.authToken);
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

export const userAuthApi = {
  loginApi,
};