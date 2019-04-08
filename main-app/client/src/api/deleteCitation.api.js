import axios from "axios";
//import { API_ENDPOINT } from "get_uri";
import { API_BASE_URL } from '../config/url_config';

import { UserAuth } from '../utilities/auth';

const authToken = UserAuth.getAuthToken();

const deleteCitation = ({ id, citationId }, successFn, errorFn) => {
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    }
  }
  return axios
    .delete(`${API_BASE_URL}/participants/${id}/citations/${citationId}`, config, {
      timeout: 5000
    })
    .then(res => {
      let {
        data: { citations }
      } = res;
      successFn(citations);
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

export default deleteCitation;
