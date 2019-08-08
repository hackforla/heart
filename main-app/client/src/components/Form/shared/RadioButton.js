import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  label: {
    fontSize: '14px',
  }
}))


export const RadioButton = ({
  field: { name },
  value,
  onChange,
  label,
  values,
}) => {
  const classes = useStyles()
  return (
    <div>
      <input
        name={name}
        id={name}
        type="radio"
        value={value}
        onChange={onChange}
        className="radio-input"
        checked={values[name] === value}
      />
      <label className={classes.label}>
        {label}
      </label>
    </div>
  )
}

export default RadioButton
