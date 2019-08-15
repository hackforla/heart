import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, FormGroup, FormLabel } from '@material-ui/core'

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

export const FormGroupCheckBox = ({
  id,
  value,
  onChange,
  onBlur,
  label,
  children,
}) => {
  const classes = useStyles()
  const handleChange = event => {
    const target = event.currentTarget
    let valueArray = [...value] || []

    if (target.checked) {
      valueArray.push(target.id)
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1)
    }

    onChange(id, valueArray)
  }

  const handleBlur = () => onBlur(id, true)

  return (
    <FormControl component="fieldset" className={classes.root} fullWidth={true}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            field: {
              value: value.includes(child.props.id),
              onChange: handleChange,
              onBlur: handleBlur,
            },
          })
        })}
      </FormGroup>
    </FormControl>
  )
}

FormGroupCheckBox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.any,
}

export default FormGroupCheckBox
