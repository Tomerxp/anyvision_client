import React from 'react'
import { navigate } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { LibraryMusic } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

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
}))

const TopBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => navigate('/')}>
            <LibraryMusic />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            iTunes Searcher
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
