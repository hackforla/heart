import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CancelButton,
  DeleteButton,
  FormActionBar,
  SaveButton,
} from '../FormElements'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Field, Form, Formik } from 'formik'
import { Divider } from '@material-ui/core'
import { FormGroupSelect, FormGroupCheckbox } from '../FormElements'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const StatusForm = ({
  initialValues,
  handleFormSubmit,
  handleCancel,
  isEditing,
}) => {
  const classes = useStyles()
  const [bgCheck, setBGCheck] = useState({
    CCHRS: false,
    'W&W': true,
    DMV: false,
    TCIS: false,
  })

  const handleChange = name => event => {
    console.log(name)
    setBGCheck({ ...bgCheck, [name]: event.target.checked })
  }
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
          <Field
            disabled={!isEditing}
            component={FormGroupSelect}
            otionsList={[
              'New Case',
              'Obligation Form Completed',
              'Waiting For Background Check',
              'Attorney Review',
              'Sent to Court',
              'Received From Court',
              'Sent to ParticipantProfile',
              'Closed',
            ]}
            name="status"
            label="Status"
          />
          <br />
          <br />
          <Field
            disabled={!isEditing}
            component={FormGroupCheckbox}
            optionsList={bgCheck}
            handleChange={handleChange}
            name="backgroundCheck"
            label="Background Check"
          />

          <Divider />
          {isEditing && (
            <FormActionBar>
              <DeleteButton handleClick={() => {}} />
              <CancelButton
                handleClick={() => handleReset(resetForm, initialValues)}
              />
              <SaveButton />
            </FormActionBar>
          )}
        </Form>
      )}
    />
  )
}

StatusForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
}

export default StatusForm
