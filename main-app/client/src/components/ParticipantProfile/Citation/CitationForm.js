import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  FormActionBar,
  CancelButton,
  DeleteButton,
  SaveButton,
  FormGroupInput,
  FormGroupSelect,
} from '../FormElements'
import { Field, Form, Formik } from 'formik'
import { Divider, Grid } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Violations } from '../Violations'
import { courtList } from './courtList'
import { Search } from '../Search'
import { violationCodes } from '../Violations/violationCodes'
import _ from 'lodash'

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
  setAlert,
}) => {
  const classes = useStyles()
  const [tempViolations, setTempViolations] = useState([])

  const handleReset = (cb, initVals) => {
    handleCancel()
    cb(initVals)
  }

  useEffect(() => {
    setTempViolations(initialValues.violations)
  }, [initialValues.violations])

  const handleFormvalues = formVals => {
    let x = Object.assign({}, formVals, { violations: tempViolations })
    handleFormSubmit(x)
  }

  const handleViolationSelection = val => {
    if (tempViolations.length < 5)
      setTempViolations(prevState => prevState.concat([val]))
    if (tempViolations.length === 4) {
      setAlert('warning')
      setTimeout(() => setAlert(''), 4000)
    }
  }

  const handleViolationRemoval = val =>
    setTempViolations(prevState => _.filter(prevState, x => x !== val))

  return (
    <Formik
      enableReinitialize
      onSubmit={(values, action) => handleFormvalues(values)}
      initialValues={initialValues}
      render={({ handleSubmit, isSubmitting, values, resetForm, ...props }) => (
        <Form>
          <Grid container className={classes.root}>
            <Grid item xs={12} sm={4}>
              <Field
                disabled={!isEditing}
                name="citation_number"
                id="citation_no"
                type="text"
                label="Citation No."
                variant="outlined"
                inputProps={{ 'aria-label': 'Citation Number' }}
                component={FormGroupInput}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                disabled={!isEditing}
                id="courtCode"
                name="court_code"
                label="Court Code"
                component={FormGroupSelect}
                optionsList={courtList}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                disabled={!isEditing}
                name="citation_status"
                id="status"
                label="Status"
                component={FormGroupSelect}
                optionsList={['sent', 'not sent', 'warrant']}
              />
            </Grid>
          </Grid>
          <Divider />
          <Violations
            violations={tempViolations}
            isEditing={isEditing}
            handleViolationRemoval={handleViolationRemoval}
          />
          <Search
            handleSelection={handleViolationSelection}
            searchList={violationCodes}
            exceptionList={tempViolations}
            disabled={!isEditing}
            placeholder={
              tempViolations.length === 5
                ? 'Max violations reached'
                : 'Search Violations'
            }
          />

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
