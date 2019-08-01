import React, { useState } from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import { makeStyles } from '@material-ui/core'
import uuid from 'uuid'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#95a5a6',
  },
  fieldLabel: {
    color: theme.palette.common.black,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

const TableHeader = ({ initOrderBy, headers }) => {
  const classes = useStyles()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(initOrderBy)

  const createSortHandler = property => event => {
    handleRequestSort(event, property)
  }

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  return (
    <TableHead className={classes.root}>
      <TableRow>
        {headers.map(row => (
          <TableCell
            key={uuid()}
            align="left"
            sortDirection={orderBy === row.as ? order : false}
          >
            {row.sortable ? (
              <TableSortLabel
                className={classes.fieldLabel}
                active={orderBy === row.as}
                direction={order}
                onClick={createSortHandler(row.as)}
              >
                {row.as}
                {orderBy === row.as ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              row.as
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
