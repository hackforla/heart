import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import uuid from 'uuid'
import {
  IconButton,
  Link,
  TableCell,
  TableRow,
  makeStyles,
} from '@material-ui/core'
import _ from 'lodash'
import EditIcon from '@material-ui/icons/Edit'
import Whatshot from '@material-ui/icons/Whatshot'

const useStyles = makeStyles({
  cell: { fontSize: 14 },
})

const TableRecord = ({ values }) => {
  const classes = useStyles()
  return (
    <TableRow hover key={uuid()}>
      <TableCell>{values[0] === 'true' && <Whatshot />}</TableCell>
      {_.slice(values, 1, values.length - 1).map(data => (
        <TableCell key={uuid()} className={classes.cell}>
          {' '}
          {data}{' '}
        </TableCell>
      ))}
      <TableCell>
        <Link
          component={RouterLink}
          to={`/participants/${values[values.length - 1]}`}
        >
          <IconButton size="small">
            <EditIcon />
          </IconButton>
        </Link>
      </TableCell>
    </TableRow>
  )
}
TableRecord.propTypes = {
  records: PropTypes.object,
}

export default TableRecord
