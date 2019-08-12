import React, { useState, useEffect } from 'react'
import { Snackbar } from '@material-ui/core'
import { AlertWrapper } from './AlertWrapper'

export const SuccessAlert = ({ status, message }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(status), [status])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <AlertWrapper onClose={handleClose} variant="success" message={message} />
    </Snackbar>
  )
}
