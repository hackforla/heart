import React from 'react'
import { Paper, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: 150,
    margin: `0 auto`,
    left: 0,
    right: 0,
    width: '60%',
    minWidth: 600,
    minHeight: 600,
    marginBottom: theme.spacing(3),
  },
  title: {
    background: '#3122d6',
    color: 'white',
    padding: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(2),
  },
}))

const IntakeForm = ({ children }) => {
  const classes = useStyles()

  return (
    <Paper elevation={10} className={classes.paper}>
      <Typography variant="h1" className={classes.title}>
        Intake Form
      </Typography>
      <Container className={classes.container}>{children}</Container>
    </Paper>
  )
}

export default IntakeForm
