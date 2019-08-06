import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  btnRoot: {
    textTransform: 'none',
    margin: theme.spacing(1),
  },
}))

export const CancelButton = ({ handleClick }) => {
  const classes = useStyles()
  return (
    <Button
      classes={{ root: classes.btnRoot }}
      size="small"
      type="reset"
      color="default"
      onClick={handleClick}
    >
      Cancel
    </Button>
  )
}

CancelButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default CancelButton
