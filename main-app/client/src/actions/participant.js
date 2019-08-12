import axios from 'axios'
import { API_BASE_URL } from '../config/url_config'
import { UserAuth } from '../utilities/auth'

export async function getParticipant(id) {
  const authToken = UserAuth.getAuthToken()
  const response = await axios
    .get(`${API_BASE_URL}/participants/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
      timeout: 3000,
    })
    .then(res => res.data)
    .catch(err => {
      if (err.code === 'ECONNABORTED') {
        err.message = 'The request took too long - please try again later.'
      }
      return err
    })
  console.log(response)
  return response
}

export const updateParticipant = (id, data) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  console.log(id, data)
  return axios
    .put(`${API_BASE_URL}/participants/${id}`, { data, timeout: 5000 }, config)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => err)
}

export const createParticipant = (data) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  return axios
    .post(`${API_BASE_URL}/participants`, { data, timeout: 5000 }, config)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => err)
}

export default updateParticipant
