import { useEffect, useState } from 'react'
import { CancelToken } from 'axios'
import axios from './axios-instance'

const useApi = (apiUrl, initialState = []) => {
  const [state, setState] = useState(initialState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const axiosSource = CancelToken.source()
    axios
      .get(apiUrl, {
        cancelToken: axiosSource.token,
      })
      .then(response => setState(response.data))
      .catch(() => {})
      .finally(() => setIsLoading(false))
    return () => {
      axiosSource.cancel('Operation canceled by the user.')
    }
  }, [apiUrl])

  return { state, isLoading }
}

export default useApi
