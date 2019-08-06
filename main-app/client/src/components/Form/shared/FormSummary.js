import React from 'react'
import PropTypes from 'prop-types'

const renderValue = value => {
  if (value === 'Is there an urgent rush?') {
    return <div style={{ color: 'red' }}> {value} 🔥</div>
  } else {
    return <div> {value} ✅</div>
  }
}

export const FormSummary = ({ values, title }) => {
  return (
    <div className="form-summary">
      <div className="title">{title}</div>
      {values.map(value => renderValue(value))}
    </div>
  )
}

FormSummary.propTypes = {
  values: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default FormSummary
