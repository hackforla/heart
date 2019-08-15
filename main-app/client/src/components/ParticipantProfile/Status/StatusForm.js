import React from 'react'
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
import { FormGroupSelect } from '../FormElements'
import BackgroundCheckForm from './BackgroundCheckForm'
import CaseClosedForm from './CaseClosedForm'

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

  const handleReset = (cb, initVals) => {
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
        <Form style={{ width: 'auto' }}>
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
          {values.status !== 'Closed' && (
            <BackgroundCheckForm
              value={values.background_check}
              touched={touched.background_check}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            />
          )}
          {values.status === 'Closed' && (
            <CaseClosedForm
              value={values.background_check}
              touched={touched.background_check}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            />
          )}
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
