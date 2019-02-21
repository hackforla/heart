import axios from 'axios';
import { API_ENDPOINT } from './../../get_uri';

const getParticipant = (id, successFn, errorFn) => {
  return axios.get(`${API_ENDPOINT}/participants/${id}`, {
    timeout: 3000,
  })
  .then(res => {
    let { data } = res;
    successFn(data[0]);
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

export default getParticipant;