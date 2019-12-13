import React from 'react'

import SearchResults from './SearchResults/SearchResults'

import SearchIcon from '@material-ui/icons/Search'
import './SearchPage.scss'
import { InputBase, makeStyles, fade } from '@material-ui/core'
import useSearchApi from './useSearchApi'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
      maxWidth: '600px',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))

const SearchPage = () => {
  const classes = useStyles()
  const { bindSearchInput, results } = useSearchApi()

  return (
    <div className="search-page">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search Anything…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ ...bindSearchInput, autoFocus: true }}
        />
      </div>
      <div>
        <SearchResults results={results} />
      </div>
    </div>
  )
}

export default SearchPage
