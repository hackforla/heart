import { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import { UserAuth } from '../utilities/auth'
import { API_BASE_URL } from '../config/url_config'

// reducer taken from Robin Wieruch medium article & recommended by React Docs
// Only handles get requests
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useFetch = initialUrl => {
  const [url, setUrl] = useState(initialUrl)

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    data: [],
  })

  useEffect(() => {
    let didCancel = false

    const fetchData = () => {
      dispatch({ type: 'FETCH_INIT' })

      return axios
        .get(`${API_BASE_URL}/${url}`, {
          headers: { Authorization: `Bearer ${UserAuth.getAuthToken()}` },
          timeout: 3000,
        })
        .then(res => {
          if (!didCancel) dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        })
        .catch(error => {
          if (!didCancel) {
            if (error.code === 'ECONNABORTED') {
              error.message =
                'The request took too long - please try again later.'
            }
            dispatch({ type: 'FETCH_FAILURE', payload: error })
          }
        })
    }

    fetchData()

    // clean up when component un-mounts
    return () => (didCancel = true)
  }, [url])

  return [state, setUrl]
}

export { useFetch }
