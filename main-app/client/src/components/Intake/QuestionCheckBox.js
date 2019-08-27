import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { Box, makeStyles } from '@material-ui/core'
import { BaseCheckBox } from '../ParticipantProfile/FormElements'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const QuestionCheckBox = ({ name, label }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Field component={BaseCheckBox} name={name} label={label} />
    </Box>
  )
}

QuestionCheckBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
}

export default QuestionCheckBox
