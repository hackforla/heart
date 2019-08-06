import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel } from '@material-ui/core'
import BaseInput from './BaseInput'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

export const FormGroupInput = ({
  id,
  label,
  field,
  form: { touched, errors },
  ...props
}) => {
  const classes = useStyles()
  const errmsg = touched[field.name] && errors[field.name]
  return (
    <FormControl className={classes.root} component="div" fullWidth={true}>
      <InputLabel
        shrink
        htmlFor={id}
        className={classes.label}
        error={!!errmsg}
      >
        {label}
      </InputLabel>
      <BaseInput id={id} field={field} {...props} />
    </FormControl>
  )
}

FormGroupInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

FormGroupInput.defaultProps = {
  id: '', // needed for screen readers
  label: 'Label',
}

export default FormGroupInput
