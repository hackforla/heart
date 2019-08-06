import React from 'react'
import { Button } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  btnRoot: {
    textTransform: 'none',
    margin: theme.spacing(1),
  },
}))

export const SaveButton = () => {
  const classes = useStyles()
  return (
    <Button
      classes={{ root: classes.btnRoot }}
      size="small"
      type="submit"
      variant="contained"
      color="primary"
    >
      Save
    </Button>
  )
}

export default SaveButton
