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
    label: 'Age',
    inputs: [
      { name: 'age', value: '18-24' },
      { name: 'age', value: '25-54' },
      { name: 'age', value: '55-61' },
      { name: 'age', value: '62 and up' },
    ],
  },
  {
    component: RadioButton,
    label: 'Gender',
    inputs: [
      { name: 'gender', value: 'Female' },
      { name: 'gender', value: 'Male' },
      { name: 'gender', value: 'Transgender male to female' },
      { name: 'gender', value: 'Transgender female to male' },
      { name: 'gender', value: 'Other' },
      { name: 'gender', value: 'Unknown' },
    ],
  },

  {
    component: RadioButton,
    label: 'Race',
    inputs: [
      { name: 'race', value: 'White' },
      { name: 'race', value: 'Black/African-American' },
      { name: 'race', value: 'Asian' },
      { name: 'race', value: 'American Indian/Alaskan Native' },
      { name: 'race', value: 'Native Hawaiian/Other Pacific Islander' },
      { name: 'race', value: 'Multi-Racial/Other' },
      { name: 'race', value: 'Unknown' },
    ],
  },
  {
    component: RadioButton,
    label: 'Ethnicity',
    inputs: [
      { name: 'ethnicity', value: 'Hispanic/Latino' },
      { name: 'ethnicity', value: 'Non hispanic' },
      { name: 'ethnicity', value: 'Unknown' },
    ],
  },
  {
    component: RadioButton,
    label: 'Housing Status',
    inputs: [
      { name: 'housing_status', value: 'Currently homeless' },
      { name: 'housing_status', value: 'At risk of experiencing homelessness' },
      { name: 'housing_status', value: 'Other' },
    ],
  },
  {
    component: RadioButton,
    label: 'Is this individual chronically homeless?',
    comment:
      '(more than 4 time in 3 years or disabled and homeless more than 1 year)',
    inputs: [
      { name: 'homelessness-status', value: 'Yes' },
      { name: 'homelessness-status', value: 'No' },
    ],
  },
  {
    component: RadioButton,
    label: 'Are they a veteran?',
    inputs: [
      { name: 'veteran-status', value: 'Yes' },
      { name: 'veteran-status', value: 'No' },
    ],
  },
]

const GeneralInfoFormGroup = props => {
  return (
    <div className="general-info-form-group">
      <div className="title">General Information</div>

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
      <div className="comment">{form_input.comment}</div>
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

export default GeneralInfoFormGroup
