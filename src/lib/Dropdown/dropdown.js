import React, {Component} from 'react';
import s from './dropdown.css';
import cx from 'classnames';

import dropdownIcon from './ud-icon-dropdown.png';

class Dropdown extends Component {

  constructor(props){
    super(props);
    this.props = props;

    this.state = {
      menuOpen : false,
      label : props.label,
      options : props.children,
      value : null,
      onSelect : props.callback === undefined ? (x) => {} : props.callback,
    }
  }


  clickHandler = () => {
    this.setState({menuOpen : !this.state.menuOpen});
  }

  selectHandler = (option) => {
    this.setState({value:option.value, label:option.name});
    this.state.onSelect(option.value);
    this.clickHandler();
  }

  optionHelper = () => {
    if (this.state.menuOpen){
      return(
        <div className = {cx(s.stack)}>
          {this.state.options.map((option) =>{
            return(
              <button
                className = {cx(s.option)}
                key = {`ddoption${option.value}`}
                onClick = {()=>{this.selectHandler(option)}}
              >
              <div className = {s.optionText}>
                {option.name}
              </div>
            </button>)
          })}
        </div>
      )

    }
    else {
      return(
              <div/>
      )
    }
  }

  render(){
    return(
      <div className = {s.container}>
        <button
          className = {cx(s.dropdown)}
          onClick = {this.clickHandler}
        >
          <div className = {s.label}>{this.state.label}</div>
          <div className = {s.iconContainer}>
            <img src = {dropdownIcon} className = {s['ud-icon-dropdown']} alt="Dropdown Icon"/>
          </div>
        </button>
        {this.optionHelper()}
      </div>
    )
  }


}


export default Dropdown;
