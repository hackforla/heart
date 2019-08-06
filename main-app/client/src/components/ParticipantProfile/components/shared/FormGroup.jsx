import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel } from '@material-ui/core'
import BaseInput from './BaseInput'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

const FormGroup = ({
  id,
  label,
  // form: { touched, errors },
  ...props
}) => {
  const classes = useStyles()
  // const errmsg = touched[field.name] && errors[field.name]
  return (
    <div>
      <FormControl className={classes.margin} component="div">
        <InputLabel
          shrink
          htmlFor={props.id}
          className={classes.label}
          // error={!!errmsg}
        >
          {label}
        </InputLabel>
        <Field
          id={id}
          label={label}
          {...props}
          component={BaseInput}
          disabled={props.disabled}
        />
      </FormControl>
    </div>
  )
}

FormGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

FormGroup.defaultProps = {
  id: '', // needed for screen readers
  label: 'Label',
}

export default FormGroup
