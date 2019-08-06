import React from 'react'
import { Button } from '@material-ui/core'

export const YesField = ({
  index,
  field: { name },
  value,
  values,
  onChange,
  className,
}) => {
  return (
    <div key={index} className={`agreement-group ${className}`}>
      <div className="agreement-content">{name}</div>
      <Button
        className={`yes-button ${values[value] ? 'selected' : ''}`}
        onClick={() => onChange(value, !values[value])}
        size="large"
      >
        Yes
      </Button>
    </div>
  )
}

export default YesField
