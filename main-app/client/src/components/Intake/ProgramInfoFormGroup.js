import React from 'react'
import { Field } from 'formik'
import { RadioButton, BasicField } from '../Form/shared'
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
  const classes = useStyles()
  return (
    <div className="general-info-form-group">
      <div className={classes.formGroupTitle}>Program Information</div>

      {form.map(form_input =>
        renderInput(form_input, props.handleChange, props.values, classes)
      )}
    </div>
  )
}

const renderInput = (form_input, handleChange, values, classes) => {
  return (
    <div key={form_input.label} className={classes.formInput}>
      <label className={classes.label}>{form_input.label}</label>
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
