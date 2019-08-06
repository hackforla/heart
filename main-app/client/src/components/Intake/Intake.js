import React from 'react'
import IntakeForm from './IntakeForm'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import FormTabs from '../Form/FormTabs'
import ClinicFormGroup from './ClinicFormGroup'
import ContactInfoFormGroup from './ContactInfoFormGroup'
import GeneralInfoFormGroup from './GeneralInfoFormGroup'
import FamilyAndIncomeFormGroup from './FamilyAndIncomeFormGroup'
import ProgramInfoFormGroup from './ProgramInfoFormGroup'
import OnsiteObligationsFormGroup from './OnsiteObligationsFormGroup'
import AgreementsFormGroup from './AgreementsFormGroup'
import { Grid } from '@material-ui/core'

export const Intake = () => {
  return (
    <div className="intake">
      {/*<div className="top-header" />*/}

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
                      <GeneralInfoFormGroup {...props} />
                      <FamilyAndIncomeFormGroup {...props} />
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
                      <OnsiteObligationsFormGroup {...props} />
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
              label: 'Agreements',
              Form: () => (
                <Formik onSubmit={values => console.log(values)}>
                  {props => (
                    <Form>
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
          ]}
        />
      </IntakeForm>
    </div>
  )
}

export default Intake
