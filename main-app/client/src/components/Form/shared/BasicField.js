import React from 'react'

export const BasicField = ({
  field: { name },
  type,
  value,
  onChange,
  label,
  values,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      placeholder={placeholder}
      className="input-field"
    />
  )
}

export default BasicField
