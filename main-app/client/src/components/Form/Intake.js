import React from 'react'
import IntakeForm from './IntakeForm/components/IntakeForm'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import './Intake.scss'
import FormTabs from '../FormTabs'
import ClinicFormGroup from './IntakeForm/components/ClinicFormGroup'
import ContactInfoFormGroup from './IntakeForm/components/ContactInfoFormGroup'
import ProgramInfoFormGroup from './IntakeForm/components/ProgramInfoFormGroup'
import { Typography, Grid } from '@material-ui/core'

const Intake = () => {
  return (
    <div className="intake">
      <div className="top-header" />

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
                      <br />
                      <br />
                      <Grid container justify="center" spacing={4}>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            size="large"
                            color="default"
                          >
                            Save For Later
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            size="large"
                            color="primary"
                          >
                            Continue to Obligations
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              ),
            },
            {
              label: 'Obligations',
              Form: () => (
                <Formik onSubmit={values => console.log(values)}>
                  {props => (
                    <Form>
                      <ProgramInfoFormGroup {...props} />
                      {/*The rest of the form groups could go here */}
                      <br />
                      <br />
                      <Grid container justify="center" spacing={4}>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            size="large"
                            color="default"
                          >
                            Save For Later
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            size="large"
                            color="primary"
                          >
                            Continue to Agreement
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
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
