import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, InputBase, Paper } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    // backgroundColor: 'transparent',
    // boxShadow: 'none',
    // borderRadius: 0
    // borderBottom: '2px solid #ced4da'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // border: '1px solid #ced4da',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xl')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
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
  },
}))

const SearchBar = ({
  placeholder,
  disabled,
  findSearchResults,
  isSearching,
}) => {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')
  const handleChange = val => {
    setSearchValue(val.toUpperCase())
    findSearchResults(val.toUpperCase())
  }

  useEffect(() => {
    if (!isSearching) {
      setSearchValue('')
    }
  }, [isSearching])

  console.log('SearchBar Rendered')
  return (
    <div className={classes.grow}>
      <Paper>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                id="search"
                disabled={disabled}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchValue}
                margin="none"
                fullWidth
                inputProps={{ 'aria-label': 'search' }}
                onChange={e => handleChange(e.target.value)}
                placeholder={placeholder}
              />
            </div>
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  findSearchResults: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
  placeholder: 'Search',
  disabled: false,
}

export default SearchBar
