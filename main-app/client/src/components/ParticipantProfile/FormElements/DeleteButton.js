import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  btnDelete: {
    textTransform: 'none',
    margin: theme.spacing(1),
    marginRight: 'auto', //pushes button to the left of container
  },
}))

export const DeleteButton = ({ handleClick }) => {
  const classes = useStyles()
  return (
    <Button
      classes={{ root: classes.btnDelete }}
      size="small"
      color="secondary"
      onClick={handleClick}
    >
      Delete
    </Button>
  )
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default DeleteButton
