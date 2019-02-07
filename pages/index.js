/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/DialogTitle';
import DialogContent from 'material-ui/DialogContent';
import DialogContentText from 'material-ui/DialogContentText';
import DialogActions from 'material-ui/DialogActions';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import TextField from 'parts/TextField';
import Link from 'next/link';
import LinkButton from 'parts/LinkButton';
import Grid from 'material-ui/Grid';
import injectLayout from 'hoc/withLayout';

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const dialogPart = (
      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );

    const linkPart = (
      <Grid item xs={12}>
        <LinkButton
          color="primary"
           href="/dashboard"
           label="きなちゃんの紹介"
        />
      </Grid>
    );

    return (
      <div className={classes.root}>
        {dialogPart}
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Material-UI
          </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              example project
          </Typography>
          </Grid>
          {linkPart}
          <Grid item xs={12}>
            <TextField
              label="hello"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={this.handleClick}>
              Super Secret Password
          </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectLayout(withStyles(styles)(Index));
