import React from 'react'
import PropTypes from 'prop-types'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core'
import uuid from 'uuid'
import _ from 'lodash'

const TableHeader = ({ order, orderBy, headers, onRequestSort }) => {
  const createSortHandler = property => e => onRequestSort(e, property)

  return (
    <TableHead>
      <TableRow>
        {_.keys(headers).map(row => (
          <TableCell
            key={uuid()}
            align="left"
            sortDirection={orderBy === headers[row]['as'] ? order : false}
          >
            {headers[row]['sortable'] ? (
              <TableSortLabel
                active={orderBy === headers[row]['as']}
                direction={order}
                onClick={createSortHandler(headers[row]['as'])}
              >
                {headers[row]['as']}
              </TableSortLabel>
            ) : (
              headers[row]['as']
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

TableHeader.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
  headers: PropTypes.object,
  onRequestSort: PropTypes.func,
}
export default TableHeader
