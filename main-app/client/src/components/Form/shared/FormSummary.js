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
  },
}))

const renderValue = (value, index, obligationGroups) => {
  if (value === 'Is there an urgent rush?') {
    return (
      <div key={index} style={{ color: 'red' }}>
        {' '}
        {value} 🔥
      </div>
    )
  } else {
    return <div key={index}> {findLabel(value, obligationGroups)} ✅</div>
  }
}

const findLabel = (value, obligationGroups) => {
  const categoryFinder = categoryName => {
    const valueNameSplit = value.split('_')
    const resourceGroup = valueNameSplit[0]
    const categoryTitleSplit = categoryName.obligationGroupTitle
      .toLowerCase()
      .split(' ')
    const categoryTitle = categoryTitleSplit[0]
    const obligationCategory = categoryTitle === resourceGroup
    return obligationCategory
  }
  const obligationFinder = obligation => {
    return obligation.name === value
  }
  const obligation = obligationGroups
    .find(categoryFinder)
    .obligation.find(obligationFinder)
  return obligation.label
}

export const FormSummary = ({ values, title, obligationGroups }) => {
  const classes = useStyles()
  return (
    <div className="form-summary">
      <div className={classes.formGroupTitle}>{title}</div>
      {values.map((value, index) =>
        renderValue(value, index, obligationGroups)
      )}
    </div>
  )
}

FormSummary.propTypes = {
  values: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default FormSummary
