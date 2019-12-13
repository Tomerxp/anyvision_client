import React from 'react'
import { Router } from '@reach/router'
import routes from './routes'
import TopBar from './TopBar/TopBar'
import NotFound from './NotFound/NotFound'

import { CssBaseline } from '@material-ui/core'
import ViewTrack from './ViewTrack/ViewTrack'
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
        <ViewTrack path="/track/:trackId" />
        <NotFound default />
      </Router>
    </div>
  )
}

export default App
