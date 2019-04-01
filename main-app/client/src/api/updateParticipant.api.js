import axios from 'axios';
//import { API_ENDPOINT } from 'get_uri';
import { API_BASE_URL } from '../config/url_config';

import { userAuth } from '../utilities/auth';

const authToken = userAuth.getAuthToken();

const updateParticipant = ({ id, data }, successFn, errorFn) => {
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    }
  }
  return axios.put(`${API_BASE_URL}/participants/${id}`, config, {
    data,
    timeout: 5000,
  })
  .then(res => {
    let { data: { participants } } = res;
    successFn(participants[0]);
    return res;
  })
  .catch(err => {
    console.error(err);
    let { message } = err;
    if (err.code === 'ECONNABORTED') {
      message = 'The request took too long - please try again later.';
    }
    errorFn(message);
    return err;
  })
}

export default updateParticipant;