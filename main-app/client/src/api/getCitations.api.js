import axios from "axios";
//import { API_ENDPOINT } from "get_uri";

import { API_BASE_URL } from '../config/url_config';

import { UserAuth } from '../utilities/auth';

const getCitations = (id, successFn, errorFn) => {
  const authToken = UserAuth.getAuthToken();
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    }
  }
  return axios
    .get(`${API_BASE_URL}/participants/${id}/citations`, config, {
      timeout: 3000
    })
    .then(res => {
      let { data } = res;
      successFn(data);
      return res;
    })
    .catch(err => {
      console.error(err);
      let { message } = err;
      if (err.code === "ECONNABORTED") {
        message = "The request took too long - please try again later.";
      }
      errorFn(message);
      return err;
    });
};

export default getCitations;
