import React from 'react';
import PropTypes from 'prop-types';
import injectLayout from 'hoc/withLayout';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import LinkButton from 'parts/LinkButton';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const drawerWidth = 240;

const styles = theme => ({
  image: {
    width: '100%',
    height: '100%',
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <LinkButton
            href="./"
            label="トップに戻る"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom component="h2">
            きなちゃんでし。
          </Typography>
        </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <img className={classes.image} src="../static/images/kina_space3.png"></img>
            </Paper>
          </Grid>
      </Grid>
    );
  }
} 

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectLayout(withStyles(styles)(Dashboard));
