import React from 'react';

import s from './checkbox.css';
import cx from 'classnames'

class Checkbox extends React.Component{



  constructor(props){
    super(props);
    this.props = props;
    this.state ={
      checked : props.checked !== undefined ? props.checked : false,
      disabled : props.disabled !== undefined ? props.disabled : false,
      callback : props.callback !== undefined ? props.callback : () => {},
    }
  }


  handleClick = (e) => {
    if (!this.state.disabled){
      let checked = ! this.state.checked;
      this.setState({checked});
      this.state.callback();
    }

  }



  handleStyle = () => {
    return (
      cx(
        s.checkboxBox,
         this.state.checked ? s.checked : '',
         this.state.disabled ? s.disabled : '',
      )
    )
  }

  render(){
    return(
      <div className = {s.checkboxContainer}>
        <div className = {s.checkbox}>
          <div
            className = {
              this.handleStyle()
            }
            onClick = {(e) => this.handleClick(e)}
          > </div>
          <div className = {cx(s.label)}>
              {this.props.label}
          </div>
        </div>
      </div>



    )
  }

}

export default Checkbox;
