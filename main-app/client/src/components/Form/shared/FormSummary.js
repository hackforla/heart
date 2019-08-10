import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formGroupTitle: {
    fontSize: '16px',
    color: '#adadad',
    fontWeight: '600',
    margin: '18px auto',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }
}))


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
  const classes = useStyles()
  return (
    <div className="form-summary">
      <div className={classes.formGroupTitle}>{title}</div>
      {values.map((value, index) => renderValue(value, index))}
    </div>
  )
}

FormSummary.propTypes = {
  values: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default FormSummary
