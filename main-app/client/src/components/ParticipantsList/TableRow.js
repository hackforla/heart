import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import uuid from 'uuid'
import TableField from './TableField'
const TableRow = ({ record, header_fields }) => {
  return (
    <tr>
      {Object.keys(header_fields).map(key =>
        header_fields[key].special === 'link' ? (
          <td key={uuid()}>
            <Link to={`/participants/${record.id}`}>
              <span className="view-profile-link">view profile</span>
            </Link>
          </td>
        ) : (
          <td key={uuid()}>
            <TableField record={record} formatter={header_fields[key]} />
          </td>
        )
      )}
    </tr>
  )
}

TableRow.propTypes = {
  record: PropTypes.object,
  fields: PropTypes.object,
}

export default TableRow
