import React from 'react'

const BasicField = ({ field: { name }, value, onChange, label, values }) => {
  return (
    <input name={name} id={name} onChange={onChange} className="input-field" />
  )
}

export default BasicField
