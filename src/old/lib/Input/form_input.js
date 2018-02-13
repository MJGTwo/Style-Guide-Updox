// Unauth view Login form
import React from 'react';

// Page styles
import s from './input.css';
import cx from 'classnames';

// const FormInput = (props) => {
class FormInput extends React.Component {

  constructor(props){
    super(props);
    const inputChanged = props.inputChanged === undefined? (x) => {} : props.inputChanged;

    this.state = {
      label : props.label,
      valueType : props.valueType,
      valueName : props.valueName,
      inputChanged ,
      focused : false,
      active : props.active === undefined ? true : props.active,
      value : props.label
    }
  }

  focusHandler = () => {
    if (this.state.active) {
      this.setState({focused : true});
      if (this.state.value === this.state.label){
        // this.autoFocus();
      }
    }

  }

  blurHandler = () => {
    if (this.state.active ){
      this.setState({focused : false, value: ""});
      if (this.state.value === "") this.setState({value : this.state.label});
    }
  }

  changeHandler = (e) => {
    this.state.inputChanged(e.target.value);
    this.setState({value : e.target.value})
  }

  render(){

    // console.log("TESTER5",this.state.active ? (this.state.focused ? "focus" : "") : "inactive")
    const hasFocusStyle = this.state.focused ? s.focused : "";
    const isActiveStyle = this.state.active ? hasFocusStyle : s.inactive;

    return (
          <div >
            <label
              className = {cx(isActiveStyle,s.textLabel)}
              htmlFor= {this.state.label.toLowerCase()}
             >
              {this.state.label}
            </label>
            <input
              type={this.state.valueType}
              name={this.state.valueName}
              id={this.state.valueName}
              required
              className={cx(s.textControl,isActiveStyle)}
              onChange={this.changeHandler}
              onFocus={this.focusHandler}
              onBlur={this.blurHandler}
              placeholder = {this.state.focused ? "" : this.state.label}
              disabled = {!this.state.active}
            />
          </div>


    );
  }
}
export default FormInput;
