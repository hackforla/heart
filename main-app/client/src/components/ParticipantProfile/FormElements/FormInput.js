import React from 'react'
import PropTypes from 'prop-types'
import clxs from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel } from '@material-ui/core'
import BaseInput from './BaseInput'

const useStyles = makeStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    paddingLeft: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

export const FormInput = ({
  id,
  label,
  field,
  form: { touched, errors },
  ...props
}) => {
  const classes = useStyles()
  const errmsg = touched[field.name] && errors[field.name]
  return (
    <FormControl className={classes.margin} component="div">
      <InputLabel
        shrink
        htmlFor={id}
        className={classes.label}
        error={!!errmsg}
      >
        {label}
      </InputLabel>
      <BaseInput
        id={id}
        className={clxs(classes.input, classes.root)}
        {...field}
        {...props}
      />
    </FormControl>
  )
}

FormInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  errMsg: PropTypes.string,
}

FormInput.defaultProps = {
  id: '', // needed for screen readers
  label: 'Label',
  // errMsg: null
}

export default FormInput
