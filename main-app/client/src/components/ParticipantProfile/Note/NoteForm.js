import React from 'react'
import PropTypes from 'prop-types'
import {
  FormActionBar,
  CancelButton,
  DeleteButton,
  SaveButton,
  BaseTextArea,
} from '../FormElements'
import { Field, Form, Formik } from 'formik'
import { Divider, Grid } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const NotForm = ({
  initialValues,
  handleFormSubmit,
  handleCancel,
  isEditing,
}) => {
  const classes = useStyles()
  const handleReset = (cb, initVals) => {
    console.log(initVals)
    handleCancel()
    cb(initVals)
  }
  return (
    <Formik
      enableReinitialize
      onSubmit={(values, action) => handleFormSubmit(values)}
      initialValues={initialValues}
      render={({ handleSubmit, isSubmitting, values, resetForm, ...props }) => (
        <Form>
          <Grid container className={classes.root}>
            <Field
              disabled={!isEditing}
              name="note"
              id="note"
              type="text"
              multiline
              label="Notes"
              variant="outlined"
              inputProps={{ 'aria-label': 'note-comments' }}
              component={BaseTextArea}
            />
          </Grid>
          <Divider />
          <FormActionBar>
            <DeleteButton handleClick={() => {}} />
            <CancelButton
              handleClick={() => handleReset(resetForm, initialValues)}
            />
            <SaveButton />
          </FormActionBar>
        </Form>
      )}
    />
  )
}

NotForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
}

export default NotForm
