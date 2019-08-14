import React from 'react'
import { Field } from 'formik'
import { RadioButton } from '../Form/shared'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  label: {
    fontSize: '16px',
    color: '#4f4f4f',
    display: 'block',
    paddingBottom: '4px',
    textAlign: 'left',
  },
  formInput: {
    padding: '12px 0',
  },
  starStyle: {
    color: 'red',
  },
}))

const form = [
  {
    component: RadioButton,
    label: 'Family Status',
    inputs: [
      { name: 'family_status', value: 'Single' },
      { name: 'family_status', value: 'Couple' },
      { name: 'family_status', value: 'Family with kids' },
    ],
  },
  {
    component: RadioButton,
    label: 'Income Source',
    inputs: [
      { name: 'income_source', value: 'TANF' },
      { name: 'income_source', value: 'GR' },
      { name: 'income_source', value: 'SSI/SSDI' },
      { name: 'income_source', value: 'Job' },
      { name: 'income_source', value: 'Other' },
    ],
  },
  {
    component: RadioButton,
    label: 'Income per Month',
    inputs: [
      { name: 'income_range', value: '$0' },
      { name: 'income_range', value: '$100-250' },
      { name: 'income_range', value: '$251-500' },
      { name: 'income_range', value: '$501-1000' },
      { name: 'income_range', value: '$1000-1500' },
      { name: 'income_range', value: '$1500 and up' },
    ],
  },
]

const FamilyAndIncomeFormGroup = props => {
  const classes = useStyles()
  return (
    <div className="family-and-income-form-group">
      <h4>Family And Income</h4>

      {form.map(form_input =>
        renderInput(form_input, props.handleChange, props.values, classes)
      )}
    </div>
  )
}
const renderInput = (form_input, handleChange, values, classes) => {
  return (
    <div key={form_input.label} className={classes.formInput}>
      <label className={classes.label}>
        {form_input.label}
        <span className={classes.starStyle}>*</span>
      </label>
      {form_input.inputs.map(input => {
        return (
          <Field
            required
            key={input.value}
            component={form_input.component}
            name={input.name}
            label={input.value}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            onChange={handleChange}
            values={values}
          />
        )
      })}
    </div>
  )
}

export default FamilyAndIncomeFormGroup
