const IntakeFormQA = [
  {
    category_name: '',
    category_contents: [
      {
        row: [
          {
            text: 'Clinic Attended',
            input_type: 'text',
            field_name: 'clinic_attended',
            placeholder: 'location',
            optional: true,
          },
          {
            text: 'Clinic Date',
            input_type: 'text',
            field_name: 'clinic_date',
            placeholder: 'date',
            optional: true,
          },
        ]
      }
    ]
  },
  {
    category_name: 'Personal Information',
    category_contents: [
      {
        row: [
          {
            text: 'First Name',
            input_type: 'text',
            field_name: 'first_name',
            placeholder: 'First Name',
            optional: true,
          },
          {
            text: 'Middle Name',
            input_type: 'text',
            field_name: 'middle_name',
            placeholder: 'Middle Name',
            optional: true,
          },
          {
            text: 'Last Name',
            input_type: 'text',
            field_name: 'last_name',
            placeholder: 'Last Name',
            optional: true,
          },
        ],
      },
      {
        text: 'Also known as',
        input_type: 'text',
        field_name: 'known_as',
        placeholder: 'Other names they go by',
        optional: true,
      },
      {
        text: `Driver's License`,
        input_type: 'text',
        field_name: 'driver_license',
        placeholder: 'License Number',
        optional: true,
      },
      {
        text: 'Date of Birth',
        input_type: 'text',
        field_name: 'date_of_birth',
        placeholder: 'Month/Day/Year',
        optional: true,
      },
    ],
  },
  {
    category_name: 'Contact Information',
    category_contents: [
      {
        text: 'Email Address (optional)',
        input_type: 'email',
        field_name: 'email',
        placeholder: 'email@emailaddress.com',
        optional: true,
      },
    ]
  },
  {
    text: 'Age',
    input_type: 'dropdown',
    field_name: 'age',
    placeholder: 'Choose Age Range',
    options: [
      { text: '18-24' },
      { text: '25-54' },
      { text: '55-61' },
      { text: '62-Older' },
    ],
    optional: true,
  },
  {
    text: 'Ethnicity',
    input_type: 'dropdown',
    field_name: 'ethnicity',
    placeholder: 'Choose Ethnicity',
    options: [
      { text: 'Hispanic/Latino' },
      { text: 'Not Hispanic/Latino' },
      { text: 'Unknown' },
    ],
    optional: true,
  },
  {
    text: 'Race',
    input_type: 'dropdown',
    field_name: 'race',
    placeholder: 'Choose Race',
    options: [
      { text: 'White' },
      { text: 'Black/African-American' },
      { text: 'Asian' },
      { text: 'American Indian/Alaskan Native' },
      { text: 'Native Hawaiian/Other Pacific Islander' },
      { text: 'Multi-Racial/Other' },
      { text: 'Other' },
    ],
    optional: true,
  },
  {
    text: 'Gender',
    input_type: 'dropdown',
    field_name: 'gender',
    placeholder: 'Choose Gender',
    options: [
      { text: 'Female' },
      { text: 'Male' },
      { text: 'Transgender Male to Female' },
      { text: 'Transgender Female to Male' },
      { text: 'Other' },
      { text: 'Unknown' },
    ],
    optional: true,
  },
  {
    text: 'Income Source',
    input_type: 'dropdown',
    field_name: 'income_source',
    placeholder: 'Choose Source',
    options: [
      { text: 'TANF' },
      { text: 'GR' },
      { text: 'SSI/SSDI' },
      { text: 'Job' },
      { text: 'Other' },
    ]
  },
  {
    text: 'Income per Month',
    input_type: 'dropdown',
    field_name: 'income_per_month',
    placeholder: 'Choose Income',
    options: [
      { text: '$0' },
      { text: '$100-250' },
      { text: '$251-500' },
      { text: '$501-1000' },
      { text: '$1000-1500' },
      { text: '$1500 and up' },
    ],
    optional: true,
  },
  {
    text: "Notes",
    input_type: 'textarea',
    field_name: 'notes',
    optional: true,
    placeholder: 'Intaker notes for participant'
  }
]

export default IntakeFormQA;