import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const TableRow = ({ record, header_fields }) => {
  console.log(header_fields)
  return (
    <tr>
      {Object.keys(header_fields).map((key, index) =>
        header_fields[key].special === 'link' ? (
          <td>
            <Link to="/participants/{record.id}">
              <span className="view-profile-link">view profile</span>
            </Link>
          </td>
        ) : (
          <td key={index}>{record[key]}</td>
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
