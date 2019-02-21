import axios from 'axios';
import { API_ENDPOINT } from '../../get_uri';

const updateParticipant = ({ id, data }, successFn, errorFn) => {
  return axios.put(`${API_ENDPOINT}/participants/${id}`, {
    data,
    timeout: 5000,
  })
  .then(res => {
    let { data } = res;
    console.log(data);
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

export default updateParticipant;