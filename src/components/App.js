import React from 'react'
import { Router } from '@reach/router'
import routes from './routes'
import TopBar from './TopBar/TopBar'
import NotFound from './NotFound/NotFound'

import { CssBaseline } from '@material-ui/core'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <CssBaseline />
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
