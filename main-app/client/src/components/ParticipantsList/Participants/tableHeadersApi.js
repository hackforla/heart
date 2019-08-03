export const headers = {
  urgent: {
    as: 'Rush',
    fields: ['urgent'],
    format: 'string',
    sortable: true,
  },
  created_at: {
    as: 'Date',
    fields: ['created_at'],
    format: 'date',
    sortable: true,
  },
  referral_source: {
    as: 'Referral Source',
    fields: ['referral_source'],
    format: 'string',
    sortable: true,
  },
  name: {
    as: 'Name',
    fields: ['first_name', 'last_name'],
    format: 'string',
    sortable: true,
  },
  status: {
    as: 'Case Status',
    fields: ['status'],
    format: 'string',
    sortable: true,
  },
  updated_at: {
    as: 'Last Update',
    fields: ['updated_at'],
    format: 'dateTime',
    sortable: true,
  },
  id: {
    as: '',
    fields: ['id'],
    format: 'string',
    sortable: false,
  },
}
