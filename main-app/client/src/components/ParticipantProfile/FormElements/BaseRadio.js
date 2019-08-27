import React from 'react'
import PropTypes from 'prop-types'
import { Radio, FormControlLabel } from '@material-ui/core'

export const BaseRadio = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Radio
          name={name}
          id={id}
          type="radio"
          value={id} // could be something else for output?
          checked={id === value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      }
    />
  )
}

BaseRadio.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
}

export default BaseRadio
