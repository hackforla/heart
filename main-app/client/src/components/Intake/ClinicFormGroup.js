import React from 'react'
import { Field } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formGroupTitle: {
    fontSize: '16px',
    color: '#adadad',
    fontWeight: '600',
    margin: '18px auto',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
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
    color: 'red'
  },
  inputField: {
    width: '50%',
    fontSize: '14px',
    color: '#4f4f4f',
    padding: '10px',
    marginTop: '5px',
  }
}))

const ClinicFormGroup = props => {
  const classes = useStyles()
  return (
    <div className="clinic-form-group">
      <div className={classes.starStyle}>
        * = Required
      </div>
      <div className={classes.formGroupTitle}>Clinic Attended</div>

      <div className={classes.formInput}>
        <label className={classes.label}>
          Date<span className={classes.starStyle}>*</span>
        </label>
        <Field
          required
          type="date"
          name="clinic_attended"
          placeholder="location"
          className={classes.inputField}
          onChange={props.handleChange}
        />
      </div>
      <div className={classes.formInput}>
        <label className={classes.label}>
          Referral Source
          <span className={classes.starStyle}>*</span>
        </label>
        <Field
          required
          type="text"
          name="referral_sourced"
          placeholder="Referral Source"
          className={classes.inputField}
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default ClinicFormGroup
