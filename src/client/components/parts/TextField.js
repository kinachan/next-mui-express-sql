import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MUITextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/FormHelperText';
import Validator from 'validatorjs';

const styles = theme => ({
  outerDiv: {
    padding: '8px',
    display: 'inline-block',
  },
  formLabelRoot: {
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // display: 'inline-block',
    // width: 'calc(100% - 8px)',
  },
  textField: {
    fontSize: 30,
  },
  input: {
    fontSize: 14,
    '&::placeholder': {
      fontSize: 12,
      overflow: 'hidden',
    }
  },
});

class TextField extends React.Component {
  state = {
    error: false,
  }
  handleChange = (ev) => {
    const {rule, name, errorText, onChange} = this.props;
    if (rule != null) {
      const validation = new Validator(
        {[name]: ev.target.value},
        {[name]: rule},
        errorText
      );
      const error = !validation.passes();
      this.setState({error});
      if (error) return;
    }
    if (onChange) onChange(ev, name);
  }

  render() {
    const { classes, outerStyle, maxLength, value, errorText, rule, variant, ...rest } = this.props;

    const helperText = this.state.error ? (
      <FormHelperText error >{errorText}</FormHelperText>
    ) : null;
    return (
      <div className={classes.outerDiv} style={outerStyle}>
        <MUITextField
          className={classes.textField}
          InputProps={{
            classes: {input: classes.input},
            maxLength: maxLength,
            onChange: this.handleChange,
            value: value,
        }}
        InputLabelProps={{
          FormLabelClasses: {
            root: classes.formLabelRoot,
          },
        }}
        variant={variant}
        {...rest}
        />
        {helperText}
      </div>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string,
};

TextField.defaultProps = {
  variant: 'standard'
}

export default withStyles(styles)(TextField);