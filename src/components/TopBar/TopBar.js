import React from 'react'
import { navigate } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { LibraryMusic } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import NavLink from './NavLink'
import routes from '../routes'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#213398',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const [mainPage, ...otherRoutes] = routes

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ colorPrimary: classes.appBar }}>
        <Toolbar>
          <IconButton onClick={() => navigate(mainPage.path)}>
            <LibraryMusic />
          </IconButton>
          <Typography variant="h6">
            <NavLink to={mainPage.path}>{mainPage.title}</NavLink>
          </Typography>
          {otherRoutes.map((route, index) => (
            <NavLink key={index} to={route.path}>
              {route.title}
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
