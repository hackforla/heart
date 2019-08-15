import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@material-ui/core'

export const BaseCheckBox = ({
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
        <Checkbox
          name={name}
          id={id}
          type="checkbox"
          value={value}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      }
    />
  )
}

BaseCheckBox.propTypes = {
  field: (PropTypes.shape = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  id: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
}

export default BaseCheckBox
