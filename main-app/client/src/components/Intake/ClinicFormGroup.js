import React from 'react'
import { Field } from 'formik'
import '../Form/IntakeForm/style/FormGroup.css'

const ClinicFormGroup = props => {
  return (
    <div className="clinic-form-group">
      <div className="title" className="redStar">
        * = Required
      </div>
      <div className="title">Clinic Attended</div>

      <div className="form-inputs">
        <label className="label">
          Date<span className="redStar">*</span>
        </label>
        <Field
          required
          type="date"
          name="clinic_attended"
          placeholder="location"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="label">
          Referral Source
          <span className="redStar">*</span>
        </label>
        <Field
          required
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
