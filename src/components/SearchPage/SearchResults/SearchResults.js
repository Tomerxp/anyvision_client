import React from 'react'
import CardResult from '../CardResult/CardResult'

import './SearchResults.scss'

const SearchResults = ({ results = [] }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <CardResult key={index} {...result} />
      ))}
    </div>
  )
}

export default SearchResults
