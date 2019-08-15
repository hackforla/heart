import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { BaseCheckBox, BaseTextArea, FormGroupCheckBox } from '../FormElements'
import uuid from 'uuid'

const CaseClosedForm = ({ value, touched, onChange, onBlur, disabled }) => {
  return (
    <div>
      <FormGroupCheckBox
        id="background_check"
        label="Reason for Closing"
        value={value}
        touched={touched}
        onChange={onChange}
        onBlur={onBlur}
      >
        {[
          'Completed',
          'No Obligation Form',
          'Warrant',
          'No Tickets',
          'Other',
        ].map(x => (
          <Field
            key={uuid()}
            component={BaseCheckBox}
            name="background_check"
            id={x}
            label={x}
            disabled={disabled}
          />
        ))}
        <Field
          disabled={disabled}
          name="reason"
          id="reason"
          type="text"
          multiline
          label="Reason"
          variant="outlined"
          inputProps={{ 'aria-label': 'reason-comments' }}
          component={BaseTextArea}
        />
      </FormGroupCheckBox>
    </div>
  )
}

CaseClosedForm.propTypes = {
  value: PropTypes.array,
  touched: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
}

export default CaseClosedForm
