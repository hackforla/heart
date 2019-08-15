import React from 'react'
import PropTypes from 'prop-types'
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from '@material-ui/core'
import uuid from 'uuid'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    height: 230,
  },
  subheader: {
    color: theme.palette.secondary.main,
  },
}))

const SearchResults = ({ searchResults, handleSelection }) => {
  const classes = useStyles()
  console.log('SearchResults Rendered')
  return (
    <Paper>
      <List
        component="nav"
        aria-labelledby="violations list"
        className={classes.root}
      >
        {searchResults.map(x => (
          <ListItem
            key={uuid()}
            button
            component="li"
            onClick={
              x.selectable === false ? null : () => handleSelection(x.text)
            }
          >
            <ListItemText inset primary={x.text} secondary={x.desc} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  handleSelection: PropTypes.func,
}

export default React.memo(SearchResults)
