import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Link from 'next/link';


const styles = theme => ({

});

class LinkButton extends React.Component {
  render() {
    const { href, hrefAs, label, ...rest } = this.props;
    return (
      <Link href={href} as={hrefAs}>
        <Button variant="outlined"
          {...rest}
        >
        {label}
        </Button>
      </Link>
    );
  }
}

LinkButton.propTypes = {
  hrefAs: PropTypes.string,
}
LinkButton.defaultProps = {
  hrefAs: null,
}

export default withStyles(styles)(LinkButton);