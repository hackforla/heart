import React from 'react'
import { Field } from 'formik'
import { FormGroupInput } from '../../ParticipantProfile/FormElements'
import FormSection from '../FormSection'

export const ClinicFormGroup = ({ ...props }) => {
  return (
    <FormSection heading="Clinic/Referral Attended">
      <Field
        required
        type="date"
        name="participants.clinic_date"
        placeholder="location"
        label="Clinic/Referral Date"
        component={FormGroupInput}
      />
      <Field
        required
        type="text"
        name="participants.clinic"
        placeholder="Source"
        label="Clinic/Referral Source"
        component={FormGroupInput}
      />
    </FormSection>
  )
}

export default ClinicFormGroup
