// currently not using this file but leave as it may be used when refactoring the intake form

export const personalInfoSchema = [
  {
    formGroup: 'clinic',
    label: 'Clinic Referral Date',
    field_name: 'clinic_date',
    format: 'date',
  },
  {
    formGroup: 'clinic',
    label: 'Clinic/Refereal Source',
    field_name: 'clinic',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'First Name',
    field_name: 'first_name',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'Middle Name',
    field_name: 'middle_name',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'Last Name',
    field_name: 'last_name',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'Also Know AS - AKA (Optional)',
    field_name: 'aka',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: `Driver's License / ID Number`,
    field_name: 'dl',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'Date of Birth',
    field_name: 'dob',
    format: 'date',
  },
  {
    formGroup: 'contactInfo',
    label: 'Phone Number (Optional)',
    field_name: 'phone',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'Email Address (Optional)',
    field_name: 'email',
    format: 'string',
  },
  {
    formGroup: 'contactInfo',
    label: 'Mailing Address (Optional)',
    field_name: 'address',
    format: 'string',
  },
  {
    formGroup: 'generalInfo',
    label: 'Age',
    field_name: 'age',
    format: 'string',
  },
  {
    formGroup: 'generalInfo',
    label: 'Gender',
    field_name: 'gender',
    format: 'string',
  },
  {
    formGroup: 'generalInfo',
    label: 'Race',
    field_name: 'race',
    format: 'string',
  },
  {
    formGroup: 'generalInfo',
    label: 'Ethnicity',
    field_name: 'ethnicity',
    format: 'string',
  },
  {
    formGroup: 'generalInfo',
    label: 'Housing Status',
    field_name: 'housing_status',
    format: 'string',
  },
  {
    formGroup: 'generalInfo',
    label: 'Is this individual chronically homeless?',
    field_name: 'chronic_homeless',
    format: 'bool',
  },
  {
    formGroup: 'generalInfo',
    label: 'Are they a veteran?',
    field_name: 'veteran_status',
    format: 'bool',
  },
]
