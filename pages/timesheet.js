
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Link from 'next/link';
import injectLayout from 'hoc/withLayout';


const style = theme => ({

});
class TimeSheet extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          進捗状況のTimeSheet
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          about page
        </Typography>
      </div>
    )
  }
}

export default injectLayout(withStyles(style)(TimeSheet), '進捗状況');