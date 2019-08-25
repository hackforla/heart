import React from 'react'
import { Field } from 'formik'
import { FormGroupInput } from '../../ParticipantProfile/FormElements'
import FormSection from '../FormSection'

export const ContactInfoFormGroup = ({ ...props }) => {
  return (
    <FormSection heading="Contact Information">
      <Field
        required
        label="First Name"
        component={FormGroupInput}
        name="participants.first_name"
        type="text"
        placeholder="First Name"
      />
      <Field
        label="Middle Name"
        component={FormGroupInput}
        name="participants.middle_name"
        type="text"
        placeholder="Middle Name"
      />
      <Field
        required
        label="Last Name"
        component={FormGroupInput}
        name="participants.last_name"
        type="text"
        placeholder="Last Name"
      />
      <Field
        label="Also Known As - AKA (Optional)'"
        component={FormGroupInput}
        name="participants.aka"
        type="text"
        placeholder="Also Known As"
      />
      <Field
        required
        label="Driver's License / ID Number"
        component={FormGroupInput}
        name="participants.dl"
        type="text"
        placeholder="Drivers License"
      />
      <Field
        required
        label="Date of Birth"
        component={FormGroupInput}
        name="participants.dob"
        type="date"
        placeholder="Date of Birth"
      />
      <Field
        label="Phone Number (optional)"
        component={FormGroupInput}
        name="participants.phone"
        type="text"
        placeholder="Phone Number"
      />
      <Field
        label="Email Address (optional)"
        component={FormGroupInput}
        name="participants.email"
        type="text"
        placeholder="Email Address"
      />
      <Field
        label="Mailing Address (optional)"
        component={FormGroupInput}
        name="participants.address"
        type="text"
        placeholder="Mailing Address"
      />
    </FormSection>
  )
}

export default ContactInfoFormGroup
