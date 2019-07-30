import axios from 'axios'
import { API_BASE_URL } from '../config/url_config'

import { UserAuth } from '../utilities/auth'

const getParticipants = () => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  return axios
    .get(`${API_BASE_URL}/participants/`, config, {
      timeout: 3000,
    })
    .then(res => res)
    .catch(err => {
      if (err.code === 'ECONNABORTED') {
        err.message = 'The request took too long - please try again later.'
      }
      return err
    })
}

export default getParticipants
