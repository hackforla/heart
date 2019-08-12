import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grow, Paper, Divider, makeStyles } from '@material-ui/core'
import NoteForm from './NoteForm'
import NoteHeader from './NoteHeader'
import NoteBody from './NoteBody'

const useStyles = makeStyles(theme => ({
  root: {
    borderTopColor: theme.palette.primary.main,
    borderTopWidth: 6,
    borderTopStyle: 'solid',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    boxShadow: 'none',
  },
  container: {},
}))

export const Note = ({ note, updateNote }) => {
  const classes = useStyles()
  const [isEditing, setEdit] = useState(false)
  const toggleEdit = () => setEdit(prev => !prev)
  const handleCancel = () => toggleEdit()
  const handleFormSubmit = values => {
    updateNote(values)
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
        {!isEditing ? <NoteBody note={note.notes} /> : null}
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

Note.propTypes = {
  note: PropTypes.object,
  updateNote: PropTypes.func,
}

Note.defaultProps = {
  note: '',
}

export default Note
