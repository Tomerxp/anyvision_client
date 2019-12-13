import SearchPage from './SearchPage/SearchPage'
import TopSearching from './TopSearching/TopSearching'

const routes = [
  {
    title: 'iTunes Searcher',
    Component: SearchPage,
    path: '/',
  },
  {
    title: 'Top 10 Searches',
    Component: TopSearching,
    path: '/top10',
  },
]

export default routes
