import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

import axios from '../../shared/axios-instance'
import { CancelToken } from 'axios'
import { useInput } from '../../shared/useInput'

const useSearchApi = () => {
  const { value: searchText, bind: bindSearchInput } = useInput('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const axiosSource = CancelToken.source()

    const debouncedSearch = debounce(searchText => {
      axios
        .get(`/search?term=${encodeURI(searchText)}`, {
          cancelToken: axiosSource.token,
        })
        .then(response => {
          setResults(response.data)
        })
        .catch(() => {}) // After canceling our request we will catch the exception
    }, 600)

    if (searchText) {
      debouncedSearch(searchText)
    } else {
      debouncedSearch.cancel()
      setResults([])
    }

    return () => {
      debouncedSearch.cancel()
      axiosSource.cancel('Operation canceled by the user.')
    }
  }, [searchText])

  return {
    bindSearchInput,
    results,
  }
}

export default useSearchApi
