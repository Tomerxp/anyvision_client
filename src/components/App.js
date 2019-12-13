import React from 'react'
import { Router } from '@reach/router'
import routes from './routes'
import TopBar from './TopBar/TopBar'
import NotFound from './NotFound/NotFound'

const App = () => {
  return (
    <div>
      <TopBar />
      <Router>
        {routes.map((route, index) => {
          const { Component, path } = route
          return <Component key={index} path={path} />
        })}
        <NotFound default />
      </Router>
    </div>
  )
}

export default App
