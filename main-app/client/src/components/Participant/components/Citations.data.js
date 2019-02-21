const CitationsQA = [
  {
    row: [
      {
        text: 'Citation No.',
        input_type: 'text',
        field_name: 'citation_no',
        placeholder: 'C11111',
      },
      {
        text: 'Court Code',
        input_type: 'dropdown',
        field_name: 'court_code',
        placeholder: 'Court',
        options: [
          { text: 'SM' },
        ]
      },
      {
        text: 'Status',
        input_type: 'dropdown',
        field_name: 'status',
        placeholder: 'Status',
        options: [
          { text: 'Not Sent' },
        ]
      },
    ]
  },
  {
    text: 'Violations',
    input_type: 'dropdown',
    field_name: 'violations',
    placeholder: 'Ex.PC 123.4',
    options: [
      { text: '640(b)(1)' },
      { text: '800.1' },
      { text: '800.2' },
      { text: '800.3' },
    ]
  },

]

export default CitationsQA;