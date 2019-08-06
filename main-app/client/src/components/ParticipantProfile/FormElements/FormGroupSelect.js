import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import BaseInput from './BaseInput'
import _ from 'lodash'
import uuid from 'uuid'

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

export const FormGroupSelect = ({
  id,
  label,
  field,
  form: { touched, errors },
  otionsList,
  ...props
}) => {
  const classes = useStyles()
  const errmsg = touched[field.name] && errors[field.name]
  return (
    <FormControl className={classes.root} component="div" fullWidth={true}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        value={field.value}
        onChange={field.onChange}
        input={
          <BaseInput id="age-customized-select" field={field} {...props} />
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {_.map(otionsList, x => (
          <MenuItem key={uuid()} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

FormGroupSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

FormGroupSelect.defaultProps = {
  id: '', // needed for screen readers
  label: 'Label',
}

export default FormGroupSelect
