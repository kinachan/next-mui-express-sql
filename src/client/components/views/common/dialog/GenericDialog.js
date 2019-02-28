import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/DialogTitle';
import DialogContent from 'material-ui/DialogContent';
import DialogContentText from 'material-ui/DialogContentText';
import DialogActions from 'material-ui/DialogActions';

const styles = theme => ({

});
const GenericDialog = (props) => {
  const { open, handleClose, title, content, OkButton, CancelButton = null } = props;
  const ActionPart = (
    <DialogActions>
        {CancelButton || <div></div>}
        {OkButton};
    </DialogActions>
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      {ActionPart}
    </Dialog>
  )
}
export default withStyles(styles)(GenericDialog); 