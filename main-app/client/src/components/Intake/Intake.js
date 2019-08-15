import React from 'react'
import IntakeForm from './IntakeForm'
import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'
import FormTabs from '../Form/FormTabs'
import ProgramInfoFormGroup from './ProgramInfoFormGroup'
import OnsiteObligationsFormGroup from './OnsiteObligationsFormGroup'
import PersonalInfoForm from './PersonalInfoForm'
import { Grid } from '@material-ui/core'

export const Intake = () => {
  const localStorageClick = data => {
    console.log(data)
    localStorage.setItem('data', JSON.stringify(data))
  }
  const localStorageDeleteClick = data => {
    console.log(data)
    localStorage.removeItem('data')
  }
  return (
    <div className="intake">
      {/*<div className="top-header" />*/}

      <IntakeForm>
        <FormTabs
          forms={[
            {
              label: '1. Personal Information',
              Form: () => <PersonalInfoForm />,
            },
            {
              label: '2. Obligations',
              Form: () => (
                <Formik
                  enableReinitialize={true}
                  initialValues={JSON.parse(localStorage.getItem('data'))}
                  onSubmit={values => console.log(values)}
                >
                  {({ handleReset, ...props }) => (
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
                            onClick={() => {
                              localStorageClick(props.values)
                            }}
                          >
                            Save For Later
                          </Button>
                          <Button
                            variant="contained"
                            size="large"
                            color="default"
                            onClick={() => {
                              localStorageDeleteClick()
                            }}
                          >
                            Delete
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            size="large"
                            color="primary"
                          >
                            Save and Exit
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
