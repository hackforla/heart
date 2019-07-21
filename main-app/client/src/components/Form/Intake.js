import React from 'react'
import IntakeForm from './IntakeForm/components/IntakeForm'
import { Formik, Form } from 'formik'
import './Intake.scss'
import FormTabs from '../FormTabs'
import ClinicFormGroup from './IntakeForm/components/ClinicFormGroup'
import ContactInfoFormGroup from './IntakeForm/components/ContactInfoFormGroup'
import { Typography } from '@material-ui/core'

const Intake = () => {
  return (
    <div className="intake">
      <div className="top-header"/>

      <IntakeForm>
        <FormTabs
          forms={[
            {
              label: 'Personal Information',
              Form: () => (
                <Formik onSubmit={values => console.log(values)}>
                  {props => (
                    <Form>
                      <ClinicFormGroup {...props} />
                      <ContactInfoFormGroup {...props} />
                      {/*The rest of the form groups could go here */}
                      <button type="submit" className="submit-button">
                        Intake Person
                      </button>
                    </Form>
                  )}
                </Formik>
              ),
            },
            {
              label: 'Obligations',
              Form: () => (
                <Typography variant="h1">Obligations Form </Typography>
              ),
            },
            {
              label: 'Agreement',
              Form: () => <Typography variant="h1">Agreement Form </Typography>,
            },
          ]}
        />
      </IntakeForm>
    </div>
  )
}

export default Intake
