const StatusQA = [
  {
    text: 'Status',
    input_type: 'dropdown',
    field_name: 'status',
    placeholder: 'Change Case Status To',
    optional: true,
    options: [
      { text: 'New Case' },
      { text: 'Obligation Form Completed' },
      { text: 'Waiting For Background Check' },
      { text: 'Attorney Review' },
      { text: 'Sent to Court' },
      { text: 'Received From Court' },
      { text: 'Sent to Participant' },
      { text: 'Closed' },
    ],
  },
  {
    text: 'Background Check',
    input_type: 'checkbox',
    field_name: 'databases_checked',
    optional: true,
    options: [
      { text: 'CCHRS', value: 'CCHRS' },
      { text: 'W&W', value: 'W&W' },
      { text: 'DMV', value: 'DMV' },
      { text: 'TCIS', value: 'TCIS' },
    ],
  },
]

export default StatusQA
