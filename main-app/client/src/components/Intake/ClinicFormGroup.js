import React from 'react'
import { Field } from 'formik'
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
  inputField: {
    width: '50%',
    fontSize: '14px',
    color: '#4f4f4f',
    padding: '10px',
    marginTop: '5px',
  },
}))

const ClinicFormGroup = props => {
  const classes = useStyles()
  return (
    <div className="clinic-form-group">
      <div className={classes.starStyle}>* = Required</div>
      <h4>Clinic/Referral Attended</h4>

      <div className={classes.formInput}>
        <label className={classes.label}>
          Clinic/Referral Date<span className={classes.starStyle}>*</span>
        </label>
        <Field
          required
          type="date"
          name="clinic_date"
          placeholder="location"
          className={classes.inputField}
          onChange={props.handleChange}
        />
      </div>
      <div className={classes.formInput}>
        <label className={classes.label}>
          Clinic/Referral Source
          <span className={classes.starStyle}>*</span>
        </label>
        <Field
          required
          type="text"
          name="referral_source"
          placeholder="Source"
          className={classes.inputField}
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ClinicFormGroup
