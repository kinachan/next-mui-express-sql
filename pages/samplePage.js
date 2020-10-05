import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import injectLayout from 'hoc/withLayout';
import Typography from 'material-ui/Typography';
import TextField from 'parts/TextField';
import Grid from 'material-ui/Grid';

const styles = theme => ({

});

class SamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      
    }
  }
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            サンプルコンポーネントリスト
          </Typography>
          <TextField
            value={"1"}
            label="hello"
            variant="outlined"
            errorText="数字を入力してください"
            rule="numeric"
          />
        </Grid>
      </Grid>
    );
  }
}

export default injectLayout(withStyles(styles)(SamplePage));
