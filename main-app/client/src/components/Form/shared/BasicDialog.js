import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const BasicDialog = ({
  open,
  title,
  content,
  buttons,
}) => {
  return (
    <Dialog onClose={close} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        {buttons}
      </DialogActions>
    </Dialog>
  );
}

export default BasicDialog
