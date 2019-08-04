import React from 'react'
import { Field } from 'formik'
import '../Form/IntakeForm/style/FormGroup.scss'
import { RadioButton, BasicField } from '../Form/shared'

const form = [
  {
    component: RadioButton,
    label: 'Referral Source',
    inputs: [
      { name: 'referral_source', value: 'LACC' },
      { name: 'referral_source', value: 'LA Door' },
      { name: 'referral_source', value: 'Safe Park LA' },
      { name: 'referral_source', value: 'Other' },
    ],
  },
  {
    component: RadioButton,
    label:
      'Did this individual complete community obligations by completing service hours?',
    inputs: [
      { name: 'completed_service_hours?', value: 'Yes' },
      { name: 'completed_service_hours?', value: 'No' },
    ],
  },
  {
    component: BasicField,
    label: 'If so, how many hours did this individual complete?',
    inputs: [{ name: 'service_hours', value: '' }],
  },
  {
    component: RadioButton,
    label: 'Did this individual complete community obligations?',
    inputs: [
      { name: 'completed_community_obligations?', value: 'Yes' },
      { name: 'completed_community_obligations?', value: 'No' },
    ],
  },
]

const ProgramInfoFormGroup = props => {
  return (
    <div className="general-info-form-group">
      <div className="title">Program Information</div>

      {form.map(form_input =>
        renderInput(form_input, props.handleChange, props.values)
      )}
    </div>
  )
}

const renderInput = (form_input, handleChange, values) => {
  return (
    <div key={form_input.label} className="form-inputs">
      <label className="label">{form_input.label}</label>
      {form_input.inputs.map(input => {
        return (
          <Field
            key={input.value}
            component={form_input.component}
            name={input.name}
            label={input.value}
            value={input.value}
            onChange={handleChange}
            values={values}
          />
        )
      })}
    </div>
  )
}

export default ProgramInfoFormGroup
