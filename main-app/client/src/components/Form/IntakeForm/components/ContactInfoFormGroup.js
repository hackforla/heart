import React from 'react'
import { Field } from 'formik'
import '../style/FormGroup.scss'

const ContactInfoFormGroup = props => {
  return (
    <div className="contact-info-form-group">
      <div className="title">Contact Information</div>

      <div className="form-inputs">
        <label className="label">First Name</label>

        <Field
          type="first_name"
          name="first_name"
          placeholder="first name"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-inputs">
        <label className="label">Last Name</label>

        <Field
          type="last_name"
          name="last_name"
          placeholder="last name"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ContactInfoFormGroup
