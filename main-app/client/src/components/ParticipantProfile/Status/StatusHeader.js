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
  IconButton,
  makeStyles,
  Tooltip,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

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

const StatusHeader = ({ heading, subHeading, handleClick, disabled }) => {
  const classes = useStyles()
  console.log('StatusHeading Rendered')
  return (
    <AppBar position="static" classes={{ root: classes.appBar }}>
      <Toolbar>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <CheckBoxIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={heading} secondary={subHeading} />
            <ListItemSecondaryAction>
              {/*<EditButton*/}
              {/*  disabled={disabled}*/}
              {/*  tipTitle="Edit Contact Info"*/}
              {/*  handleClick={handleClick}*/}
              {/*/>*/}
              <Tooltip title="Edit Stats" placement="top">
                <IconButton disabled={disabled} onClick={() => handleClick()}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

StatusHeader.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

StatusHeader.defaultProps = {
  heading: 'Heading',
  subheading: 'Subheading',
  disabled: false,
}

export default StatusHeader
