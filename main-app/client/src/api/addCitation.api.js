import axios from "axios";
import { API_ENDPOINT } from "get_uri";

const addCitation = ({ id, data }, successFn, errorFn) => {
  return axios
    .post(`${API_ENDPOINT}/participants/${id}/citations`, {
      data,
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

export default addCitation;
