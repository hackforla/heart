import React from 'react'

<<<<<<< HEAD
const RadioButton = ({ field: { name }, value, onChange, label, values }) => {
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
      <label>{label}</label>
=======
export const RadioButton = ({
  field: { name },
  value,
  onChange,
  label,
  values,
}) => {
  return (
    <div>
      <label>
        <input
          name={name}
          id={name}
          type="radio"
          value={value}
          onChange={onChange}
          className="radio-input"
          checked={values[name] === value}
        />
        {label}
      </label>
>>>>>>> e5079d385ebcf06e22f9c97170fdefd520a509b0
    </div>
  )
}

export default RadioButton
