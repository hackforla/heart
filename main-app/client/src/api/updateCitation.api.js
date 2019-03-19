import axios from "axios";
import { API_ENDPOINT } from "get_uri";

const updateCitation = ({ id, data }, successFn, errorFn) => {
  return axios
    .put(`${API_ENDPOINT}/participants/${id}/citation`, {
      data,
      timeout: 5000
    })
    .then(res => {
      let {
        data: { participants }
      } = res;
      successFn(participants[0]);
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

export default updateCitation;
