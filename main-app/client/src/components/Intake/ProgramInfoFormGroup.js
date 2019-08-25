import React from 'react'
import { Field } from 'formik'
import { RadioButton, BasicField } from '../Form/shared'
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

const form = [
  {
    component: RadioButton,
    label: 'Did this individual complete community obligations?',
    inputs: [
      { name: 'obligations_complete', value: 'true', label: 'Yes' },
      { name: 'obligations_complete', value: 'false', label: 'No' },
    ],
  },
]

const ProgramInfoFormGroup = props => {
  const classes = useStyles()
  return (
    <div className="general-info-form-group">
      <h4>Program Information</h4>

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
            label={input.label !== undefined ? input.label : input.value}
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
