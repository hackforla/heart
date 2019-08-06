import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
} from '@material-ui/core'
import _ from 'lodash'
import uuid from 'uuid'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))

export const FormGroupCheckbox = ({
  id,
  label,
  field,
  form: { touched, errors, setFieldValue },
  optionsList,
  handleChange,
  ...props
}) => {
  const classes = useStyles()
  const errmsg = touched[field.name] && errors[field.name]
  const updateChecked = () => {
    if (field.value.includes(props.value)) {
      const nextValue = field.value.filter(value => value !== props.value)
      setFieldValue(props.name, nextValue)
      handleChange(nextValue)
    } else {
      const nextValue = field.value.concat(props.value)
      setFieldValue(props.name, nextValue)
    }
  }

  return (
    <FormControl component="fieldset" className={classes.root} fullWidth={true}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {_.map(optionsList, (val, idx) => (
          <FormControlLabel
            key={uuid()}
            control={
              <Checkbox
                checked={val}
                onChange={updateChecked}
                value={idx}
                {...field}
                {...props}
              />
            }
            label={idx}
          />
        ))}
      </FormGroup>
    </FormControl>
  )
}

FormGroupCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  optionsList: PropTypes.object.isRequired,
}

FormGroupCheckbox.defaultProps = {
  id: '', // needed for screen readers
  label: 'Label',
  optionsList: {},
}

export default FormGroupCheckbox
