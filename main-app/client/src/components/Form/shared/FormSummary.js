import React from 'react'
import PropTypes from 'prop-types'

const renderValue = (value, index) => {
  if (value === 'Is there an urgent rush?') {
    return (
      <div key={index} style={{ color: 'red' }}>
        {' '}
        {value} 🔥
      </div>
    )
  } else {
    return <div key={index}> {value} ✅</div>
  }
}

export const FormSummary = ({ values, title }) => {
  return (
    <div className="form-summary">
      <div className="title">{title}</div>
      {values.map((value, index) => renderValue(value, index))}
    </div>
  )
}

FormSummary.propTypes = {
  values: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default FormSummary
