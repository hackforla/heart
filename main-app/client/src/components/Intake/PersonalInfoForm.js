import React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import ClinicFormGroup from './FormGroups/ClinicFormGroup'
import ContactInfoFormGroup from './FormGroups/ContactInfoFormGroup'
import GeneralInfoFormGroup from './FormGroups/GeneralInfoFormGroup'
import FamilyAndIncomeFormGroup from './FormGroups/FamilyAndIncomeFormGroup'
import AgreementsFormGroup from './FormGroups/AgreementsFormGroup'
import { Grid } from '@material-ui/core'
import { createParticipant } from '../../actions/participant'

const PersonalInfoForm = () => {
  return (
    <Formik onSubmit={values => console.log(values, 'onSubmit')}>
      {props => (
        <Form>
          <ClinicFormGroup {...props} />
          <ContactInfoFormGroup {...props} />
          <GeneralInfoFormGroup {...props} />
          <FamilyAndIncomeFormGroup {...props} />
          <AgreementsFormGroup {...props} />
          {/*The rest of the form groups could go here */}
          <br />
          <br />
          <Grid container justify="center" spacing={4}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="default"
                onClick={() => createParticipant(props.values)}
              >
                Save and Exit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => createParticipant(props.values)}
              >
                Save and Continue
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default PersonalInfoForm
