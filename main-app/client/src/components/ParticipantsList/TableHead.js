import React from 'react'
import PropTypes from 'prop-types'

const TableHead = ({ headings }) => {
  return (
    <thead>
      <tr>
        {Object.keys(headings).map((label, index) =>
          headings[label].as === '' ? (
            <th key={index} scope="col">
              &nbsp;
            </th>
          ) : (
            <th key={index} scope="col">
              {headings[label].as}
            </th>
          )
        )}
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  headings: PropTypes.object,
}

export default TableHead
