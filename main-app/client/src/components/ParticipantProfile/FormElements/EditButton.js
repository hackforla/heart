import React from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}))

export const EditButton = ({ tipTitle, handleClick, disabled }) => {
  const classes = useStyles()
  return (
    <Tooltip title={tipTitle} placement="top">
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={disabled}
        size="small"
        onClick={() => handleClick()}
      >
        Edit
        <EditIcon className={classes.icon} />
      </Button>
    </Tooltip>
  )
}

EditButton.propTypes = {
  tipTitle: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
}

EditButton.defaultProps = {
  disabled: false,
}

export default EditButton
