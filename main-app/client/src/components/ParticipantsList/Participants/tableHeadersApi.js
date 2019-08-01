export const headers = [
  { as: 'Rush', fields: ['urgent'], format: 'icon', sortable: true },
  { as: 'Date', fields: ['created_at'], format: 'date', sortable: true },
  {
    as: 'Referral Source',
    fields: ['referral_source'],
    format: 'icon',
    sortable: true,
  },
  {
    as: 'Name',
    fields: ['first_name', 'last_name'],
    format: 'string',
    sortable: true,
  },
  { as: 'Case Status', fields: ['status'], format: 'string', sortable: true },
  {
    as: 'Last Update',
    fields: ['updated_at'],
    format: 'dateTime',
    sortable: true,
  },
  { as: '', fields: ['id'], format: 'string', sortable: false },
]
