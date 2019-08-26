import React, { useState, useCallback, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Formik, Form } from 'formik'
import _ from 'lodash'
import { Link as RouterLink } from 'react-router-dom'
import { Divider, Button, Link } from '@material-ui/core'
import { TabPanel } from '../Form/FormTabs/TabPanel'
import IntakeForm from './IntakeForm'
import { addParticipant, addAgreementsObligations } from '../../actions/intake'
import { useAxios, useWindowScroll } from '../../hooks'
import { databaseDateFormat } from '../../utilities/dateFormatter'
import {
  ClinicFormGroup,
  ContactInfoFormGroup,
  GeneralInfoFormGroup,
  FamilyAndIncomeFormGroup,
  AgreementsFormGroup,
  ObligationsFormGroup,
} from './FormGroups'

import { dbTables } from './databaseSchema'
import { SuccessAlert } from '../Alerts'

export const Intake = ({ history }) => {
  const [setCoords] = useWindowScroll()
  const { isLoading, isError } = useAxios(
    `participants/0`, //should not return anything
    []
  )
  const [alert, setAlert] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)
  const [newIntake] = useState(dbTables)
  const [requiredMet, setRequiredMet] = useState(false)

  const createParticipant = useCallback((values1, values2) => {
    addParticipant(values1)
      .then(res => {
        const newRecord = Object.assign({}, values2, {
          participant_id: parseInt(res),
        })
        addAgreementsObligations(res, newRecord)
      })
      .then(res => {
        console.log(res)
        setAlert('success')
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (alert === 'success') {
      setTimeout(() => setSubmitted(true), 2000)
    }
  }, [alert])

  const handleReset = (cb, resetVals) => {
    cb(resetVals)
  }

  const handleTabTransition = () => {
    setCoords({ x: 0, y: 0 })
    setTabIndex(1)
  }

  const handleFormSubmit = (values, cb) => {
    const { participants, agreements_obligations } = values
    const obligationsTable = Object.assign({}, agreements_obligations, {})
    const participantsTable = Object.assign({}, participants, {
      aka: _.map(_.split(participants.aka, ','), _.trim),
      dob: databaseDateFormat(participants.dob),
      services: _.map(_.split(participants.services, ','), _.trim),
      clinic_date: databaseDateFormat(participants.clinic_date),
      background_check: _.map(
        _.split(participants.background_check, ','),
        _.trim
      ),
      case_closed_reason: _.map(
        _.split(participants.case_closed_reason, ','),
        _.trim
      ),
    })
    console.log(participantsTable)
    console.log(obligationsTable)
    createParticipant(participantsTable, obligationsTable)
  }

  const handleTabChange = (event, val) => {
    setTabIndex(val)
  }

  const checkRequired = fields => {
    // this function is a temporary fix.
    // it is currently inefficient
    // only handles first tab.
    // will replace with yup validations
    const requiredFields = [
      'first_name',
      'last_name',
      'clinic',
      'clinic_date',
      'dl',
      'age',
      'gender',
      'race',
      'ethnicity',
      'housing_status',
      'chronic_homeless',
      'veteran_status',
      'family_status',
      'income_source',
      'income_range',
    ]
    const participantsCheck = requiredFields.map(x => {
      return fields.participants[x].length > 0
    })
    if (participantsCheck.indexOf(false) < 0) {
      setRequiredMet(true)
      return false
    } else {
      return true
    }
  }

  return (
    <>
      {submitted && !isLoading && !isError && <Redirect to={'/'} />}

      <IntakeForm
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        showObligations={requiredMet}
      >
        {!isLoading && !isError && (
          <>
            <Formik
              enableReinitialize
              onSubmit={(values, action) => handleFormSubmit(values, newIntake)}
              initialValues={newIntake}
              render={({
                handleSubmit,
                isSubmitting,
                values,
                resetForm,
                setFieldValue,
                ...props
              }) => (
                <Form>
                  <TabPanel value={tabIndex} index={0} id="#tabpanel">
                    <ClinicFormGroup {...props} />
                    <ContactInfoFormGroup {...props} />
                    <GeneralInfoFormGroup values={values} {...props} />
                    <FamilyAndIncomeFormGroup values={values} {...props} />

                    <Divider />
                    <br />

                    <AgreementsFormGroup {...props} />
                  </TabPanel>
                  {tabIndex === 1 && (
                    <TabPanel value={tabIndex} index={1}>
                      <ObligationsFormGroup values={values} {...props} />
                    </TabPanel>
                  )}
                  <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                    {tabIndex === 0 && (
                      <>
                        <Link component={RouterLink} to="/participants">
                          <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            color="default"
                          >
                            Cancel
                          </Button>
                        </Link>
                        <Button
                          disabled={checkRequired(values)}
                          size="large"
                          type="button"
                          variant="contained"
                          color="primary"
                          onClick={handleTabTransition}
                        >
                          Save and Continue to Obligations
                        </Button>
                      </>
                    )}

                    {tabIndex === 1 && (
                      <Button
                        disabled={alert === 'success'}
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Save and Exit
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            />
          </>
        )}
        <SuccessAlert
          status={alert === 'success'}
          message="Citation successfully updated"
        />
      </IntakeForm>
    </>
  )
}
