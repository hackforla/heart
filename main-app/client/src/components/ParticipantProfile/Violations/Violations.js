import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Chip, Typography } from '@material-ui/core'
import uuid from 'uuid'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { violationCodes } from './violationCodes'

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

export const Violations = ({
  isEditing = true,
  violations,
  handleViolationRemoval,
}) => {
  const [uncommonViolations, setUncommonViolations] = useState([])
  const classes = useStyles()

  // const handleRemove = (event, violation) => {
  //   setTempViolations(tempViolations.filter(x => x !== violation))
  // }

  useEffect(() => {
    const findUncommonViolations = () => {
      let codes = _.map(violationCodes, 'text')
      return _.map(violations, x => codes.indexOf(x) < 0 && x)
    }
    setUncommonViolations(findUncommonViolations())
  }, [violations])

  console.log('Violations Rendered')
  return (
    <div className={classes.root}>
      <Typography variant="caption" component="p" gutterBottom>
        Violations (Max 5 violations)
      </Typography>
      {violations.map(v => (
        <Chip
          key={uuid()}
          label={v}
          variant="outlined"
          onDelete={isEditing ? () => handleViolationRemoval(v) : null}
          color={uncommonViolations.indexOf(v) < 0 ? 'primary' : 'secondary'}
          className={classes.chip}
        />
      ))}
    </div>
  )
}

Violations.propTypes = {
  isEditing: PropTypes.bool,
  violations: PropTypes.array,
  handleRemove: PropTypes.func,
}

export default React.memo(Violations)
