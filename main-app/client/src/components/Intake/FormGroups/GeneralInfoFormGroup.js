import React from 'react'
import { FormGroupRadio } from '../../ParticipantProfile/FormElements'
import FormSection from '../FormSection'

export const GeneralInfoFormGroup = ({ values, ...props }) => {
  return (
    <FormSection heading="General Information">
      <FormGroupRadio
        required
        id="participants.age"
        label="Age"
        value={values.age}
        touched={props.touched.age}
        list={['18-24', '25-54', '55-61', '62 and up']}
      />
      <FormGroupRadio
        required
        id="participants.gender"
        label="Gender"
        value={values.gender}
        touched={props.touched.gender}
        list={[
          'Female',
          'Male',
          'Transgender male to female',
          'Transgender female to male',
          'Other',
          'Unknown',
        ]}
      />
      <FormGroupRadio
        required
        id="participants.race"
        label="Race"
        value={values.race}
        touched={props.touched.race}
        list={[
          'White',
          'Black/African-American',
          'Asian',
          'American Indian/Alaskan Native',
          'Native Hawaiian/Other Pacific Islander',
          'Multi-Racial/Other',
          'Unknown',
        ]}
      />
      <FormGroupRadio
        required
        id="participants.ethnicity"
        label="Ethnicity"
        value={values.ethnicity}
        touched={props.touched.ethnicity}
        list={['Hispanic/Latino', 'Non hispanic', 'Unknown']}
      />
      <FormGroupRadio
        required
        id="participants.housing_status"
        label="Housing Status"
        value={values.housing_status}
        touched={props.touched.housing_status}
        list={[
          'Currently homeless',
          'At risk of experiencing homelessness',
          'Other',
        ]}
      />
      <FormGroupRadio
        required
        id="participants.chronic_homeless"
        label={`
        Is this individual chronically homeless?
      `}
        subLabel="(more than 4 time in 3 years or disabled and homeless more than 1 year)"
        value={values.chronic_homeless}
        touched={props.touched.chronic_homeless}
        list={[
          { value: 'true', label: 'Yes' },
          { value: 'false', label: 'No' },
        ]}
      />
      <FormGroupRadio
        required
        id="participants.veteran_status"
        label="Are they a veteran?"
        value={values.veteran_status}
        touched={props.touched.veteran_status}
        list={[
          { value: 'true', label: 'Yes' },
          { value: 'false', label: 'No' },
        ]}
      />
    </FormSection>
  )
}

export default GeneralInfoFormGroup
