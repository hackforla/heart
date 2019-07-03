import React from 'react'
import Paper from '@material-ui/core/Paper'
import '../style/IntakeForm.scss'
import { Formik, Form } from 'formik'
import ClinicFormGroup from './ClinicFormGroup'
import ContactInfoFormGroup from './ContactInfoFormGroup'

const IntakeForm = () => {
  return (
    <Paper elevation={10} className="paper">
      <div className="intake-title">Intake Form</div>

      <div className="intake-form">
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
      </div>
    </Paper>
  )
}

export default IntakeForm
