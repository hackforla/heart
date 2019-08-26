import React from 'react'
import FormSection from '../FormSection'
import { FormGroupRadio } from '../../ParticipantProfile/FormElements'

export const FamilyAndIncomeFormGroup = ({ values, ...props }) => {
  return (
    <FormSection heading="Family And Income">
      <FormGroupRadio
        required
        id="participants.family_status"
        label="Family Status"
        value={values.family_status}
        touched={props.touched.family_status}
        list={['Single', 'Couple', 'Family with kids']}
      />
      <FormGroupRadio
        required
        id="participants.income_source"
        label="Income Source"
        value={values.income_source}
        touched={props.touched.income_source}
        list={['TANF', 'GR', 'SSI/SSDI', 'Job', 'Other']}
      />
      <FormGroupRadio
        required
        id="participants.income_range"
        label="Income Range"
        value={values.income_range}
        touched={props.touched.income_range}
        list={[
          '$0',
          '$100-250',
          '$251-500',
          '$501-1000',
          '$1000-1500',
          '$1500 and up',
        ]}
      />
    </FormSection>
  )
}
export default FamilyAndIncomeFormGroup
