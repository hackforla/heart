import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid'
import { TableCell, TableRow, makeStyles } from '@material-ui/core'
import _ from 'lodash'
import Whatshot from '@material-ui/icons/Whatshot'

const useStyles = makeStyles(theme => ({
  row: {
    cursor: 'pointer',
    '&:hover > td:last-child': {
      opacity: 1,
    },
  },
  view: {
    color: theme.palette.secondary.main,
    opacity: 0,
  },
  urgent: {
    textAlign: 'center',
    color: theme.palette.secondary.dark,
  },
}))

const TableRecord = ({ values, history }) => {
  const classes = useStyles()

  return (
    <TableRow
      hover
      className={classes.row}
      onClick={e => history.push(`/participants/${values[values.length - 1]}`)}
    >
      <TableCell>
        {values[0] === 'true' && <Whatshot className={classes.urgent} />}
      </TableCell>
      {_.slice(values, 1, values.length - 1).map(data => (
        <TableCell key={uuid()} className={classes.cell}>
          {data}
        </TableCell>
      ))}
      <TableCell className={classes.view}>view</TableCell>
    </TableRow>
  )
}
TableRecord.propTypes = {
  values: PropTypes.array,
}

export default withRouter(TableRecord)
