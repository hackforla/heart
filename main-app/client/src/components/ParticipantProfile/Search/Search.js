import React, { useState } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import _ from 'lodash'
import { Collapse, makeStyles } from '@material-ui/core'
import SearchBar from './SearchBar'
import SearchResults from '../shared/SearchResults'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2, 2, 2, 2),
  },
}))

export const Search = ({
  handleSelection,
  searchList,
  exceptionList,
  disabled,
  placeholder,
}) => {
  const classes = useStyles()
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setSearching] = useState(false)

  const uncommonViolation = x => {
    let results = { text: x }
    if (exceptionList.indexOf(x) >= 0) {
      results.desc = 'Violation has already been selected'
      results.selectable = false
    } else {
      results.desc = 'Click to add as a UNCOMMON violation'
      results.selectable = true
    }
    return results
  }

  const findSearchResults = val => {
    const match = new RegExp(escapeRegExp(val), 'i')

    if (val) {
      const x = searchList.filter(
        x => match.test(x.text) && exceptionList.indexOf(x.text) < 0
      )

      if (_.map(x, 'text').indexOf(val) < 0) x.unshift(uncommonViolation(val))

      setSearching(true)
      setSearchResults(x)
    } else {
      setSearching(false)
      setSearchResults([])
    }
  }

  const handleSelectedValue = value => {
    setSearching(false)
    handleSelection(value)
  }
  console.log('Search Rendered')
  return (
    <div className={classes.root}>
      <SearchBar
        disabled={exceptionList.length === 5 ? true : disabled}
        placeholder={placeholder}
        findSearchResults={findSearchResults}
        isSearching={isSearching}
      />
      <Collapse in={isSearching} timeout="auto">
        <SearchResults
          searchResults={searchResults}
          handleSelection={handleSelectedValue}
        />
      </Collapse>
    </div>
  )
}

Search.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  searchList: PropTypes.array.isRequired,
  exceptionList: PropTypes.array,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default Search
