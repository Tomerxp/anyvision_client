import { useEffect, useState } from 'react'
import { CancelToken } from 'axios'
import axios from './axios-instance'

const useApi = (apiUrl, initialState = []) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const axiosSource = CancelToken.source()
    axios
      .get(apiUrl, {
        cancelToken: axiosSource.token,
      })
      .then(response => setState(response.data))
      .catch(() => setState())
    return () => {
      axiosSource.cancel('Operation canceled by the user.')
    }
  }, [apiUrl])

  return state
}

export default useApi
