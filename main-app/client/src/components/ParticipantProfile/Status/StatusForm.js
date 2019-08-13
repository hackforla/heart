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
import {
  FormGroupSelect,
  BaseCheckBox,
  FormGroupCheckBox,
} from '../FormElements'
import uuid from 'uuid'

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

  const handleChange = name => event => {
    console.log(name)
    console.log(event)
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
      render={({
        setFieldValue,
        setFieldTouched,
        handleSubmit,
        isSubmitting,
        values,
        touched,
        resetForm,
        ...props
      }) => (
        <Form>
          <Field
            disabled={!isEditing}
            component={FormGroupSelect}
            optionsList={[
              'New Case',
              'Obligation Form Completed',
              'Waiting For Background Check',
              'Attorney Review',
              'Sent to Court',
              'Received From Court',
              'Sent to Participant Profile',
              'Closed',
            ]}
            name="status"
            label="Status"
          />
          <br />
          <br />
          <FormGroupCheckBox
            id="background_check"
            label="Background Checks"
            value={values.background_check}
            touched={touched.background_check}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
          >
            {['CCHRS', 'W&W', 'DMV', 'TCIS', 'Odyssey', 'JPP'].map(x => (
              <Field
                key={uuid()}
                component={BaseCheckBox}
                name="background_check"
                id={x}
                label={x}
                disabled={!isEditing}
              />
            ))}
          </FormGroupCheckBox>

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
