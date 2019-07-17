import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import withIntake from '../../Common/withIntake'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    top: '150px',
    margin: '0 auto',
    left: '0',
    right: '0',
    width: '60%',
    minWidth: '600px',
    height: '4000px',
  },
})

const IntakeForm = () => {
  const classes = useStyles()
  return (
    <div>
      <Paper elevation={10} className={classes.paper}>
        <Formik onSubmit={values => console.log(values)}>
          {props => <form>Intake Form</form>}
        </Formik>
      </Paper>
    </div>
  )
}

export default withIntake(IntakeForm)
