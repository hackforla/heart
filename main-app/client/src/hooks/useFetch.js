import { useState, useEffect } from "react";
import axios from 'axios';
import { UserAuth } from '../utilities/auth';
import { API_BASE_URL } from '../config/url_config'

const useFetch = (url) =>{
  const [config] =useState(() => {
    return {headers: { Authorization: `Bearer ${UserAuth.getAuthToken()}` }}
  })
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await axios.get(`${API_BASE_URL}/${url}`, config, {
      timeout: 3000,
    })
      .then(res => res)
      .catch(err => {
        if (err.code === 'ECONNABORTED') {
          err.message = 'The request took too long - please try again later.';
        }
        return err;
      });

    setData(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}

export { useFetch };