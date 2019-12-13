import SearchPage from './SearchPage/SearchPage'

const routes = [
  {
    title: 'iTunes Searcher',
    Component: SearchPage,
    path: '/',
  },
  {
    title: 'Top 10 Searches',
    Component: SearchPage,
    path: '/top10',
  },
]

export default routes
