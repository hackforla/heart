import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

const GreenCheckbox = withStyles({
  root: {
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />)

export const CheckBoxField = ({
  index,
  field: { name, onChange },
  value,
  values,
  className,
}) => {
  return (
    <div key={index} className={`agreement-group ${className}`}>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={values[name] || false}
            onChange={onChange}
            name={name}
            value={value}
          />
        }
        label={name}
      />
    </div>
  )
}

export default CheckBoxField
