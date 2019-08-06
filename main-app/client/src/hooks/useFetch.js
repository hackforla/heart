<<<<<<< HEAD
import { useReducer, useEffect } from "react";
import axios from 'axios';
import { UserAuth } from '../utilities/auth';
import { API_BASE_URL } from '../config/url_config'

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        data: action.payload,
        isLoading: false,
        isError: false,
        initialLoad: false
      };
    case 'ADD_DATA':
      return {
        data: state.data.concat(action.payload),
        isLoading:false,
        isError: false
      };
    case 'UPDATE_DATA':
      return {
        data: state.data.map(x => x.id === action.id ? action.payload[0] : x),
        isLoading: false,
        isError: false,
      };
    case 'DELETE_DATA':
      return state.filter(x => x.id !== action.id);
=======
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
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
<<<<<<< HEAD
      };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

const useFetch = (url) =>{
  const [state, dispatch] = useReducer(dataFetchReducer, {
    initialLoad: true, isLoading: true, isError: false, data: []
  });

  const fetchData = (method, url, formData, headers) => {
    return axios({
      method: method,
      url: `${API_BASE_URL}/${url}`,
      data: formData ? formData: null,
      timeout: method === 'get' ? 3000 : 5000,
      headers: { Authorization: `Bearer ${UserAuth.getAuthToken()}` }
    })
      .then(res => {
        switch (method) {
          case 'get':
            dispatch({type: 'FETCH_DATA', payload: res.data});
            break;
          case 'post':
            dispatch({type: 'ADD_DATA', payload: formData});
            break;
          case 'put':
            // need to review what backend will actually use (should be an id)
            dispatch({type: 'UPDATE_DATA', payload: res.data.data, id: formData.id});
            break;
          case 'delete':
            // need to review what backend will actually use (should be an id)
            dispatch({type: 'DELETE_DATA', id: formData.Id});
            break;
          default:
            dispatch({})
        }
      })
      .catch(error => {
        if(error.code === 'ECONNABORTED') {
          error.message = 'The request took too long - please try again later.'
        }
        dispatch({ type: 'FETCH_FAILURE', payload: error});
      })
  };

  useEffect (() => {
    // common problem in React that component state is set even though the
    // component got already unmounted (e.g. due to navigating away with React Router).
    // "didCancel" flag addresses that issue

    let didCancel = false;
    if (!didCancel) {
      if(state.initialLoad) {
        fetchData('get', url);
      } else {
        fetch()
      }
    }

    // clean up when component un-mounts
    return () => didCancel = true;

  },[url]);

  return [state, fetchData, dispatch]
};

export { useFetch };
=======
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
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
