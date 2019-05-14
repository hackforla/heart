import axios from 'axios';
//import { API_ENDPOINT } from 'get_uri';
import { API_BASE_URL } from '../config/url_config';

import { UserAuth } from '../utilities/auth';

const updateParticipant = ({ id, data }, successFn, errorFn) => {
  const authToken = UserAuth.getAuthToken();
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    }
  }
  return axios.put(`${API_BASE_URL}/participants/${id}`, { data, timeout: 5000 }, config)
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