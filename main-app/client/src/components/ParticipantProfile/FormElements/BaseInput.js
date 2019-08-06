import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'

/*
This base input sets the base style for all inputs and
takes Formik's base props and all the props added to the Field
component and spreads them to the Material-ui's inputbase
 */

const useStyles = makeStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      width: '100%',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    textIndent: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
  },
}))

export const BaseInput = ({ disabled, id, field, ...props }) => {
  const classes = useStyles()
  return (
    <InputBase
      disabled={disabled}
      id={id}
      fullWidth={true}
      classes={{ root: classes.root, input: classes.input }}
      value={field.value}
      {...field}
      {...props}
    />
  )
}

export default BaseInput
