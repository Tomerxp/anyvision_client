import { useEffect, useState } from 'react'
import { CancelToken } from 'axios'
import axios from '../../shared/axios-instance'

const useSearchTrackApi = trackId => {
  const [trackData, setTrackData] = useState()

  useEffect(() => {
    const axiosSource = CancelToken.source()
    axios
      .get(`/search/${trackId}`, {
        cancelToken: axiosSource.token,
      })
      .then(response => setTrackData(response.data[0]))
      .catch(() => setTrackData({}))
    return () => {
      axiosSource.cancel('Operation canceled by the user.')
    }
  }, [trackId])

  return trackData
}

export default useSearchTrackApi
