import React from 'react'
import { Field } from 'formik'
import '../style/FormGroup.scss'

const ClinicFormGroup = props => {
  return (
    <div className="clinic-form-group">
      <div className="form-inputs">
        <label className="label">Clinic Attended</label>

        <Field
          name="clinic_attended"
          placeholder="location"
          className="input-field"
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ClinicFormGroup
