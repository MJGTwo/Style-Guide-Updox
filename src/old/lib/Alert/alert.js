import React from 'react';

import s from './alert.css';


export default function Alert(props){


  let content = props.children;
  if (props.children === undefined || ! /\S/.test(content)){
    content = props.text;
  }

  const style = props.style;
// the style variable will have a pattern similar to the following pattern:
//  style = {
//    width : '10px',
//    height : '10%',
//    textAlign : 'center',
//    backgroundColor : 'black'
//    ...
//  }
//  There are default values for the Alert class inside alert.scss,
//  however if the user finds they need different styles they can
//  pass them in-line to this component.

  return (
    <div className = {s.alert} style = {{...style}}>
      {content}
    </div>
  )
}
