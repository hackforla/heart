import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, TextField } from '@material-ui/core'
import clxs from 'clsx'

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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    height: 300,
    overflowY: 'scroll',
    display: 'flex',
    alignItems: 'flex-start',
  },
}))

export const BaseTextArea = ({ disabled, id, field, ...props }) => {
  const classes = useStyles()
  return (
    <InputBase
      disabled={disabled}
      id={id}
      fullWidth={true}
      className={clxs(classes.input, classes.root)}
      value={field.value}
      {...field}
      {...props}
    />
  )
}

export default BaseTextArea
