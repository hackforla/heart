import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inputField: {
    width: '50%',
    fontSize: '14px',
    color: '#4f4f4f',
    padding: '10px',
    marginTop: '5px',
  }
}))


export const BasicField = ({
  field: { name },
  type,
  value,
  onChange,
  label,
  values,
  placeholder,
}) => {
  const classes = useStyles()
  return (
    <input
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      placeholder={placeholder}
      className={classes.inputField}
    />
  )
}

export default BasicField
