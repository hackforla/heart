import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Chip, Typography } from '@material-ui/core'
import uuid from 'uuid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  chip: {
    margin: theme.spacing(1),
  },
}))

export const Violations = ({ isEditing = true, violations }) => {
  const [tempViolations, setTempViolations] = useState([])
  const classes = useStyles()

  const handleRemove = (event, violation) => {
    setTempViolations(tempViolations.filter(x => x !== violation))
  }

  useEffect(() => {
    setTempViolations(violations)
  }, [violations])

  return (
    <div className={classes.root}>
      <Typography variant="caption" gutterBottom>
        Violations
      </Typography>
      <div>
        {violations.map(v => (
          <Chip
            key={uuid()}
            label={v}
            onDelete={isEditing ? e => handleRemove(e, v) : null}
            // color={isCommon(violation)}
            className={classes.chip}
          />
        ))}
      </div>
    </div>
  )
}

Violations.propTypes = {
  isEditing: PropTypes.bool,
  violations: PropTypes.array,
  handleRemove: PropTypes.func,
}

export default Violations
