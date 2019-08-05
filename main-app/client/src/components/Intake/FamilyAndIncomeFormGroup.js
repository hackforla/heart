import React from 'react'
import { Field } from 'formik'
import '../Form/IntakeForm/style/FormGroup.scss'
import { RadioButton } from '../Form/shared'

const starStyle = {
  color: '#f44336',
}

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
      { name: 'income_per_month', value: '$0' },
      { name: 'income_per_month', value: '$100-250' },
      { name: 'income_per_month', value: '$251-500' },
      { name: 'income_per_month', value: '$501-1000' },
      { name: 'income_per_month', value: '$1000-1500' },
      { name: 'income_per_month', value: '$1500 and up' },
    ],
  },
]

const FamilyAndIncomeFormGroup = props => {
  return (
    <div className="family-and-income-form-group">
      <div className="title">Family And Income</div>

      {form.map(form_input =>
        renderInput(form_input, props.handleChange, props.values)
      )}
    </div>
  )
}
const renderInput = (form_input, handleChange, values) => {
  return (
    <div key={form_input.label} className="form-inputs">
      <label className="label">
        {form_input.label}
        <span style={starStyle}>*</span>
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
