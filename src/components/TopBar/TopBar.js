import React from 'react'
import { navigate, Link } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { LibraryMusic } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import routes from '../routes'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  topBarLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const [mainPage, ...otherRoutes] = routes

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => navigate(mainPage.path)}>
            <LibraryMusic />
          </IconButton>
          <Link to={mainPage.path} className={classes.topBarLink}>
            <Typography variant="h6" className={classes.title}>
              {mainPage.title}
            </Typography>
          </Link>
          {otherRoutes.map((route, index) => (
            <Link key={index} to={route.path} className={classes.topBarLink}>
              {route.title}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
