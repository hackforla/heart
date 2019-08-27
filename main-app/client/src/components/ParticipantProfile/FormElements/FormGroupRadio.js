import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, FormLabel, Typography } from '@material-ui/core'
import { Field } from 'formik'
import uuid from 'uuid'
import { BaseRadio } from './BaseRadio'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    marginLeft: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

export const FormGroupRadio = ({
  id,
  value,
  onChange,
  onBlur,
  label,
  children,
  error,
  touched,
  list,
  subLabel,
  ...props
}) => {
  const classes = useStyles()

  return (
    <FormControl
      className={classes.formControl}
      component="fieldset"
      fullWidth={true}
    >
      <FormLabel component="legend" required={props.required ? true : null}>
        {label}
      </FormLabel>
      <Typography variant="body2">{subLabel}</Typography>
      <br />
      {list.map(x => (
        <Field
          required={props.required ? true : null}
          key={uuid()}
          component={BaseRadio}
          name={id}
          label={x.label || x}
          id={x.value || x}
        />
      ))}
    </FormControl>
  )
}

FormGroupRadio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  error: PropTypes.object,
  touched: PropTypes.func,
  list: PropTypes.array,
  subLabel: PropTypes.string,
}

export default FormGroupRadio
