import React, {Component} from 'react';


import s from './button.css';

class HGButton extends Component {
  constructor(props) {
    super(props)

    const buttons = props.children;
    const onSubmit = props.onSubmit ? props.onSubmit : (x) => {};
    this.state = {
      disabled : props.disabled===null ? false : props.disabled,
      buttons,
      onSubmit,
    }

  }

  onButtonClick = (value) => {
    this.state.onSubmit(value);
  }


  renderButtons(){
    return (
      this.state.buttons.map((buttonItem)=>{
      return (
        <button
          key ={buttonItem.label}
          onClick = { ()=>{this.onButtonClick(buttonItem.value)}}
          className = {s.HGButton}
          >
          {buttonItem.label}
        </button>)
      })
    )
  }

  render() {
    return(
      <div className = {s.HGButtonGroup}>
        {this.renderButtons()}
      </div>
    )

  }
}



export default HGButton;
