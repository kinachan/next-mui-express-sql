import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import injectLayout from 'hoc/withLayout';
import Typography from 'material-ui/Typography';

const styles = theme => ({

});

class SamplePage extends React.Component {
  render() {
    return (
      <Typography variant="h4" gutterBottom>
        Material-UI
      </Typography>
    );
  }
}

export default injectLayout(withStyles(styles)(SamplePage));
