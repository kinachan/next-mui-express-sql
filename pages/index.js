/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import TextField from 'parts/TextField';
import LinkButton from 'parts/LinkButton';
import Grid from 'material-ui/Grid';
import GenericDialog from 'views/common/dialog/GenericDialog';
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
    const okButton = <Button color="primary" onClick={this.handleClose}>OK</Button>;

    const dialogPart = (
      <GenericDialog
        open={this.state.open}
        handleClose={this.handleClose}
        title="Dialog Common Component"
        content="もりさきくんは ふっとばされた！"
        OkButton={okButton}
      />
    );

    const linkButtonPart = (
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
          {linkButtonPart}
          <Grid item xs={12}>
            <TextField
              label="hello"
              variant="outlined"
              errorText="数字を入力してください"
              rule="numeric"
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

export default injectLayout(withStyles(styles)(Index), "最初のページ", true);
