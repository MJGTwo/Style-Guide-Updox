// Unauth view Login form
import React from 'react';

// Page styles
import s from './input.css';


export default function TextInput(props){

    const {label, valueType, valueName, inputChanged} = props;

    return (
          <div >
            <label className={s.formLabel} htmlFor= {label.toLowerCase()}>
              {label}
            </label>
            <input
              type={valueType}
              name={valueName}
              id={valueName}
              required
              className={s.formControl}
              onChange={inputChanged}
            />
          </div>


    );
}
