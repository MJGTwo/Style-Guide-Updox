import React, {Component} from 'react';

import cx from 'classnames';
import s from './button.css';

class HLink extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      disabled : props.disabled===null ? false : props.disabled,
}

  }


  render() {
    return(
      <a
        type="submit"
        className={cx(s.link)}
        disabled={this.state.disabled }
        onClick = {this.props.callback}
        href = {this.props.link}
        style = {{  fontSize: this.props.fontsize}}
      >
        {this.props.label}
      </a>
    )

  }
}



export default HLink;
