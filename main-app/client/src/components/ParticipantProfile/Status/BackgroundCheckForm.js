import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { BaseCheckBox, FormGroupCheckBox } from '../FormElements'
import uuid from 'uuid'
const BackgroundCheckForm = ({
  value,
  touched,
  onChange,
  onBlur,
  disabled,
}) => {
  return (
    <FormGroupCheckBox
      id="background_check"
      label="Background Checks"
      value={value}
      touched={touched}
      onChange={onChange}
      onBlur={onBlur}
    >
      {['CCHRS', 'W&W', 'DMV', 'TCIS', 'Odyssey', 'JPP'].map(x => (
        <Field
          key={uuid()}
          component={BaseCheckBox}
          name="background_check"
          id={x}
          label={x}
          disabled={disabled}
        />
      ))}
    </FormGroupCheckBox>
  )
}

BackgroundCheckForm.propTypes = {
  value: PropTypes.array,
  touched: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
}

export default BackgroundCheckForm
