import React, { useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import _ from 'lodash'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TableHeader from './TableHeader'
import Pagination from './Pagination'
import { stableSort, getSorting } from '../../utilities/sortingUtils'
import TableRecord from './TableRecord'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}))

const ParticipantsTable = ({ headers, records, initOrderBy }) => {
  const [order, setOrder] = useState('desc')
  const [orderBy, setOrderBy] = useState(initOrderBy)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const classes = useStyles()

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, records.length - page * rowsPerPage)

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => setPage(newPage)
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Toolbar style={{ backgroundColor: '#1C76D2' }}>
          <Typography variant="h2">{_.toUpper('Participants')}</Typography>
        </Toolbar>
        <Table size="small">
          <TableHeader
            order={order}
            orderBy={orderBy}
            headers={headers}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(records, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(record => (
                <TableRecord
                  key={uuid()}
                  values={_.map(_.values(record))}
                  x={record}
                />
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={records.length} />
              </TableRow>
            )}
          </TableBody>
          <Pagination
            colCount={_.map(headers).length}
            recordCount={records.length}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Table>
      </div>
    </Paper>
  )
}

ParticipantsTable.propTypes = {
  headers: PropTypes.object.isRequired,
  records: PropTypes.array.isRequired,
  initOrderBy: PropTypes.string.isRequired, //must match casing as headers 'as' property
}

export default ParticipantsTable
