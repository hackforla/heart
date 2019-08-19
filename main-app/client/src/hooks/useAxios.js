import { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import { UserAuth } from '../utilities/auth'
import { API_BASE_URL } from '../config/url_config'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, isLoading: true, isError: false }
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: '',
        data: action.payload,
      }
    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: 'Requested Data failed to be retrieved',
      }
    case 'UPDATE_DATA':
      const newData = state.data.map(rec => {
        return rec.id === action.replaceRecord.id ? action.replaceRecord : rec
      })

      return {
        ...state,
        isLoading: false,
        isError: false,
        data: newData,
      }
    case 'POST_DATA':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: state.data.concat(action.payload),
      }
    default:
      throw new Error()
  }
}

const useAxios = (initUrl, initData) => {
  const [url] = useState(initUrl)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    errMsg: '',
    data: initData,
  })

  useEffect(() => {
    let didCancel = false // set for cleanup when comp un-mounts

    const fetchData = async () => {
      dispatch({ type: 'INIT' })

      try {
        let res = await axios.get(`${API_BASE_URL}/${url}`, {
          headers: { Authorization: `Bearer ${UserAuth.getAuthToken()}` },
          timeout: 3000,
        })
        if (!didCancel) dispatch({ type: 'SUCCESS', payload: res.data })
      } catch (err) {
        if (!didCancel) dispatch({ type: 'FAILURE', payload: err })
      }
    }

    fetchData()

    return () => (didCancel = true) // clean up when component un-mounts
  }, [url])

  const updateDataRecord = (record, method) => {
    if (method === 'post') {
      dispatch({ type: 'POST_DATA', payload: record })
    } else {
      dispatch({ type: 'UPDATE_DATA', replaceRecord: record })
    }
  }
  return { ...state, updateDataRecord }
}

export { useAxios }
