import React, {Component} from 'react';
import cx from 'classnames';

import {Button} from '../Button';

import s from './modal.css';
import exitIconStandard from './exitIconStandard.svg';
import exitIconOption from './exitIconOption.svg';

export default class StandardModal extends Component {
  constructor(props){
    super(props)

    const onSubmit = props.onSubmit === undefined ? (x) => {} : props.onSubmit;
    const size = props.size === undefined ? 'small' : props.size;
    const label = props.label === undefined ? 'modal' : props.label;
    const type = props.type;
    const onCancel = props.onCancel === undefined ? (x) => {} : props.onCancel;
    const title = props.title === undefined ? "Dialog Modal Title" : props.title;
    const content = props.content === undefined ? "Content of the modal dialog." : props.content;

    this.state = {
      open : false,
      onSubmit,
      size,
      label ,
      type ,
      onCancel,
      title ,
      content,
    }

    this.styles = {
      title : `modal-title-${this.state.type}`,
      exit : `modal-exit-${this.state.type}`,
      content : `modal-content-${this.state.type}`,
      close : `modal-close-${this.state.type}`,
      exitIcon : this.state.type === 'standard' ? exitIconStandard : exitIconOption
    }
  }

  openModal = () => {
    this.setState({open : true});
  }

  submitHelper = () => {
    this.state.onSubmit();
    this.closeModal();
  }

  closeModal = () => {
    this.setState({open : false});
  }

  cancelHelper = () => {
    this.state.onCancel();
    this.closeModal();
  }

  buttonStyle = () => {
    if (this.state.type === 'standard'){
      return (
        <div className= {cx(s[this.styles['close']])} onClick = {this.submitHelper}>
          <div className= {s.closeLabel}>
            OK
          </div>
        </div>
      )
    }
    else {
      return (
        <div className = {cx(s[this.styles['close']])}>
          <Button label = "OK" type = "primary" callback = {this.submitHelper}/>
          <div style = {{display: 'inline-block', width : '10px'}}/>
          <Button label = "Cancel" type = "secondary" callback = {this.cancelHelper}/>
        </div>
      )
    }
  }

  render(){

    const open = this.state.open ? {display : 'block'} : {};

    return(
      <div style = {{display : 'inline-block'}}>
        <Button label = {this.state.label} type = "primary" callback={this.openModal}/>
        <div className = {cx(s.modal )} style = {open}>
          <div className = {cx(s['modal-box'],s[this.state.size])}>
            <div className = {cx(s[this.styles['exit']])} onClick = {this.closeModal}>
              <img src={this.styles.exitIcon} className={s.icon} alt="exitIcon"/>
            </div>
            <div className = {cx(s[this.styles['title']])}>
              {this.state.title}
            </div>
            <div className = {cx(s[this.styles['content']])}>
              {this.state.content}
            </div>
            {this.buttonStyle()}
          </div>

        </div>
      </div>


    )
  }
}
