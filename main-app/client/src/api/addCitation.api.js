import axios from 'axios'
//import { API_ENDPOINT } from "get_uri";
import { API_BASE_URL } from '../config/url_config'

import { UserAuth } from '../utilities/auth'

const addCitation = ({ id, data }, successFn, errorFn) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    },
  }
  return axios
    .post(
      `${API_BASE_URL}/participants/${id}/citations`,
      { data, timeout: 5000 },
      config
    )
    .then(res => {
      successFn(res.data)
      return res.data
    })
    .catch(err => {
      console.error(err)
      let { message } = err
      if (err.code === 'ECONNABORTED') {
        message = 'The request took too long - please try again later.'
      }
      errorFn(message)
      return err
    })
}

export default addCitation
