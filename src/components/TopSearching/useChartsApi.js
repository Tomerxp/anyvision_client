import { useEffect, useState } from 'react'

import axios from '../../shared/axios-instance'
import { CancelToken } from 'axios'

const useChartsApi = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const axiosSource = CancelToken.source()

    axios
      .get(`/charts/top`, {
        cancelToken: axiosSource.token,
      })
      .then(response => {
        setResults(response.data)
      })
      .catch(() => {}) // After canceling our request we will catch the exception

    return () => {
      axiosSource.cancel('Operation canceled by the user.')
    }
  }, [])

  return results
}

export default useChartsApi
