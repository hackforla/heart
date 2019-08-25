import axios from 'axios'
import { API_BASE_URL } from '../config/url_config'
import { UserAuth } from '../utilities/auth'

export async function getCitations(id) {
  const authToken = UserAuth.getAuthToken()
  const response = await axios
    .get(`${API_BASE_URL}/participants/${id}/citations`, {
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

export const updateCitation = (id, data) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }

  return axios
    .put(`${API_BASE_URL}/citations/${id}`, { data, timeout: 5000 }, config)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => err)
}

export const addCitation = (id, data) => {
  const authToken = UserAuth.getAuthToken()
  let config = {
    headers: {
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
      console.log(res)
      return res.data
    })
    .catch(err => err)
}
