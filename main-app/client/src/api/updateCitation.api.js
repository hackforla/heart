import axios from 'axios'
//import { API_ENDPOINT } from "get_uri";
import { API_BASE_URL } from '../config/url_config'

import { UserAuth } from '../utilities/auth'

const updateCitation = ({ id, data, citationId }, successFn, errorFn) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      // Provide user's auth token as credentials
      Authorization: `Bearer ${authToken}`,
    },
  }

  return axios
    .put(
      `${API_BASE_URL}/citations/${citationId}`,
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

export default updateCitation
