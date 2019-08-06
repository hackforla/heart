import React from 'react'
import PropTypes from 'prop-types'
import {
  FormActionBar,
  CancelButton,
  DeleteButton,
  SaveButton,
  FormGroupInput,
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

const CitationForm = ({
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
              name="citation_no"
              id="citation_no"
              type="text"
              label="Citation No."
              variant="outlined"
              inputProps={{ 'aria-label': 'Citation Number' }}
              component={FormGroupInput}
            />
            <Field
              disabled={!isEditing}
              name="court_code"
              id="court_code"
              type="text"
              label="Court Code"
              variant="outlined"
              inputProps={{ 'aria-label': 'Court Code' }}
              component={FormGroupInput}
            />
            <Field
              disabled={!isEditing}
              name="Status"
              id="status"
              type="text"
              label="Status"
              variant="outlined"
              inputProps={{ 'aria-label': 'Status' }}
              component={FormGroupInput}
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

CitationForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
}

export default CitationForm
