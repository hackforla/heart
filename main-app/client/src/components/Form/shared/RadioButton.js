import React from 'react'

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
    </div>
  )
}

export default RadioButton
