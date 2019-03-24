export const question_set_1 = [
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
              },
            ],
          },
          {
            text: 'Also known as',
            input_type: 'text',
            field_name: 'known_as',
            placeholder: 'Other names they go by',
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
        ]
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
        ]
      },
]