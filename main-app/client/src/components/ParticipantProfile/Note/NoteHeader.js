import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Toolbar,
  makeStyles,
} from '@material-ui/core'
import { EditButton } from '../FormElements'
import CommentIcon from '@material-ui/icons/Comment'

const useStyles = makeStyles(theme => ({
  root: {
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  list: {
    width: '100%',
    color: 'black',
  },
}))

const NoteHeader = ({ heading, subHeading, handleClick, disabled }) => {
  const classes = useStyles()
  console.log('ContactHeading Rendered')
  return (
    <AppBar position="static" classes={{ root: classes.appBar }}>
      <Toolbar>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <CommentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={heading} secondary={subHeading} />
            <ListItemSecondaryAction>
              <EditButton
                disabled={disabled}
                tipTitle="Edit Note"
                handleClick={handleClick}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

NoteHeader.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

NoteHeader.defaultProps = {
  heading: 'Heading',
  subheading: 'Subheading',
  disabled: false,
}

export default NoteHeader
