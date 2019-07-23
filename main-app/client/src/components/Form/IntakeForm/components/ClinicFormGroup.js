import React from 'react'
import { Field } from 'formik'
import '../style/FormGroup.scss'

const ClinicFormGroup = props => {
  return (
    <div className="clinic-form-group">
      <div className="title">Clinic Attended</div>

      <div className="form-inputs">
        <label className="label">Date</label>
        <Field
          type="date"
          name="clinic_attended"
          placeholder="location"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="label">Referral Source</label>
        <Field
          type="text"
          name="referral_sourced"
          placeholder="Referral Source"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ClinicFormGroup
