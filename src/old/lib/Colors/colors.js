import React from 'react';
import cx from 'classnames';
import s from './colors.css';




export default function Colors(props){

  const COLORS = {
    colorAccent: '#044456',
    colorAccentLight: '#175d6f',
    colorProduct: '#2a8586',
    colorProductLight: '#2d9d9c',
    colorButtonHover: '#dedede',
    colorButton: '#efefef',
    colorText: '#5c5c5c',
    colorTextLight: '#ababab',
    colorInputOutline: '#abcbca',
    colorInput : '#f4fcfc',
    colorBorder : '#dedede',
    colorBackground : 'white',
    colorWrongOutline : '#db1c56',
    colorWrong : '#ffe9f0',
    colorWarningOutline : '#f7eba4',
    colorWarning : '#fffce2',
  };
  const NAMES = [
    'colorAccent',
    'colorAccentLight',
    'colorProduct',
    'colorProductLight',
    'colorButtonHover',
    'colorButton',
    'colorText',
    'colorTextLight',
    'colorInputOutline',
    'colorInput',
    'colorBorder',
    'colorBackground',
    'colorWrongOutline',
    'colorWrong',
    'colorWarningOutline',
    'colorWarning'
  ];




  return(
    <div>
      {NAMES.map((name) =>{
        return(<div key = {name} className = {cx(s.swatch,s[name])}>
          <div className = {cx(s.textbox,s.leftbox)}>
            {`$${name}`}
          </div>
          <div className = {cx(s.textbox,s.rightbox)}>
            {`${COLORS[name]}`}
          </div>
        </div>)
      })}
    </div>

  )
}
