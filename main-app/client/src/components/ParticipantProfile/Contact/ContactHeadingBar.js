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
import PersonIcon from '@material-ui/icons/Person'

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

const ContactHeadingBar = ({ heading, subHeading, handleClick }) => {
  const classes = useStyles()
  console.log('ContactHeading Rendered')
  return (
    <AppBar position="static" classes={{ root: classes.appBar }}>
      <Toolbar>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={heading} secondary={subHeading} />
            <ListItemSecondaryAction>
              <EditButton
                tipTitle="Edit Contact Info"
                handleClick={handleClick}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

ContactHeadingBar.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

ContactHeadingBar.defaultProps = {
  heading: 'Heading',
  subheading: 'Subheading',
}

export default ContactHeadingBar
