import React from 'react'

<<<<<<< HEAD
const BasicField = ({ field: { name }, value, onChange, label, values }) => {
  return (
    <input name={name} id={name} onChange={onChange} className="input-field" />
=======
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
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
  )
}

export default BasicField
