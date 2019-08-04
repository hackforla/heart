import React from 'react'
import { Field } from 'formik'
import '../Form/IntakeForm/style/FormGroup.scss'
import { BasicField } from '../Form/shared'

const starStyle = {
  color: '#f44336',
}

const form = [
  {
    component: BasicField,
    label: 'First Name',
    inputs: [
      {
        type: 'text',
        name: 'first_name',
        placeholder: 'First Name',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: 'Middle Name',
    inputs: [
      {
        type: 'text',
        name: 'middle_name',
        placeholder: 'Middle Name',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: 'Last Name',
    inputs: [
      { type: 'text', name: 'last_name', placeholder: 'Last Name', value: '' },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Also Known As - AKA (Optional)',
    inputs: [
      {
        type: 'text',
        name: 'also_known_as',
        placeholder: 'Also Known As - AKA (Optional)',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: "Driver's License / ID Number",
    inputs: [
      {
        type: 'text',
        name: 'id_number',
        placeholder: "Driver's License / ID Number",
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    label: 'Date of Birth',
    inputs: [
      {
        type: 'date',
        name: 'date_of_birth',
        placeholder: 'Date of Birth',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Phone Number (optional)',
    inputs: [
      {
        type: 'tel',
        name: 'phone_number',
        placeholder: 'Phone Number (optional)',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Email Address (optional)',
    inputs: [
      {
        type: 'email',
        name: 'email_address',
        placeholder: 'Email Address (optional)',
        value: '',
      },
    ],
  },
  {
    component: BasicField,
    optional: true,
    label: 'Mailing Address (optional)',
    inputs: [
      {
        type: 'text',
        name: 'mailing_address',
        placeholder: 'Mailing Address (optional)',
        value: '',
      },
    ],
  },
]

const ContactInfoFormGroup = props => {
  return (
    <div className="contact-info-form-group">
      <div className="title">Contact Information</div>

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
        <span style={starStyle}>{!form_input.optional && '*'}</span>
      </label>
      {form_input.inputs.map(input => {
        return (
          <Field
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

export default ContactInfoFormGroup
