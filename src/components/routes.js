import React from 'react'
import SearchPage from './SearchPage/SearchPage'
import TopSearching from './TopSearching/TopSearching'

const routes = [
  {
    title: 'iTunes Searcher',
    Component: SearchPage,
    path: '/',
  },
  {
    title: 'Your Top 10 Searches',
    Component: TopSearching,
    path: '/top10',
  },
  {
    title: 'Global Top 10',
    Component: () => <TopSearching isGlobal />,
    path: '/global-top10',
  },
]

export default routes
