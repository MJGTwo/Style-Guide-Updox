import React, {Component} from 'react';

import cx from 'classnames';
import s from './button.css';

//I'm trying to figure out how to impose the color values from palette onto
//Button to result in the same effect as ../Colors/colors.

class Button extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      disabled : props.disabled===null ? false : props.disabled,
      type : props.type === null ? 'primary' : props.type.toLowerCase(),
    }

  }

  buttonType = () => {
    if (this.state.type === 'primary'){
      return s.primary;
    }
    else if (this.state.type === 'secondary'){
      return s.secondary;
    }
    else {
      return s.primary;
    }
  }



  render() {
    return(
      <button
        type="submit"
        className={cx(s.btn, this.buttonType())}
        disabled={this.state.disabled }
        onClick = {this.props.callback}
      >
        {this.props.label}
      </button>
    )

  }
}



export default Button;
