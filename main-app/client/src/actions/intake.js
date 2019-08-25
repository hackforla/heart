import axios from 'axios'
import { API_BASE_URL } from '../config/url_config'
import { UserAuth } from '../utilities/auth'

export const addParticipant = (data) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  return axios
    .post(
      `${API_BASE_URL}/participants/`,
      { data, timeout: 5000 },
      config
    )
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => err)
}
