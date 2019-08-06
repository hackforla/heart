import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form, Formik } from 'formik'
import { Container, Grid, Divider } from '@material-ui/core'
import { FormGroupInput } from '../FormElements'
import { FormActionBar } from '../FormElements'
import CancelButton from '../FormElements/CancelButton'
import SaveButton from '../FormElements/SaveButton'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

export const ContactForm = ({
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

  console.log('ContactForm Rendered')
  return (
    <Formik
      enableReinitialize
      onSubmit={(values, action) => handleFormSubmit(values)}
      initialValues={initialValues}
      render={({ handleSubmit, isSubmitting, values, resetForm, ...props }) => (
        <Form>
          <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="first_name"
                id="firstName"
                type="text"
                label="First Name"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="last_name"
                id="LastName"
                type="text"
                label="Last Name"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="aka"
                id="aka"
                type="text"
                label="aka"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="clinic"
                id="clinic"
                type="text"
                label="clinic"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="dob"
                id="dob"
                type="text"
                label="dob"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="dl"
                id="dl"
                type="text"
                label="Drivers License"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="phone"
                id="phone"
                type="phone"
                label="phone"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field
                disabled={!isEditing}
                name="email"
                id="email"
                type="email"
                label="email"
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                disabled={!isEditing}
                name="address"
                id="address"
                type="text"
                label="address"
                component={FormGroupInput}
              />
            </Grid>
          </Grid>
          <Divider />
          <FormActionBar>
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

ContactForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
}

export default ContactForm

//
// <Button
// size="small"
// type="button"
// variant="contained"
// color="primary"
// onClick={() => handleReset(resetForm, initialValues)}
// >
// Cancel
// </Button>
// <Button
//   size="small"
//   type="submit"
//   variant="contained"
//   color="primary"
// >
//   Save
// </Button>
