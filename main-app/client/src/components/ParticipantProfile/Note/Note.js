import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grow, Paper, Divider } from '@material-ui/core'
import NoteForm from './NoteForm'
import NoteHeader from './NoteHeader'
import NoteBody from './NoteBody'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
  container: {},
}))

const noteComment = {
  note: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt
 doloribus illo iste laboriosam molestiae nisi nulla placeat. Ab aspernatur autem 
 consequuntur laudantium, nobis perspiciatis rem similique voluptate! Impedit, magni. 
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloribus 
 illo iste laboriosam molestiae nisi nulla placeat. Ab aspernatur autem consequuntur 
 laudantium, nobis perspiciatis rem similique voluptate! Impedit, magni. Lorem ipsum 
 dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloribus illo 
 iste laboriosam molestiae nisi nulla placeat. Ab aspernatur autem consequuntur 
 laudantium, nobis perspiciatis rem similique voluptate! Impedit, magni.`,
}

export const Note = props => {
  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const [note, setNote] = useState(noteComment)
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    setNote(values)
    toggleEdit()
  }
  return (
    <Paper className={classes.root}>
      <NoteHeader
        heading="Comments & Notes"
        handleClick={toggleEdit}
        disabled={isEditing}
      />
      <Divider />
      <div className={classes.container}>
        {!isEditing && <NoteBody note={note.note} />}
      </div>
      {isEditing && (
        <Grow in={isEditing}>
          <Paper className={classes.paper}>
            <NoteForm
              handleFormSubmit={handleFormSubmit}
              isEditing={isEditing}
              initialValues={note}
              handleCancel={handleCancel}
            />
          </Paper>
        </Grow>
      )}
    </Paper>
  )
}

Note.propTypes = {}

export default Note
