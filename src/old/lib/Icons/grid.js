import React from 'react';

import s from './grid.css';
import cx from 'classnames';

const iconList = [
  "ud-icon-surgery",
  "ud-icon-message",
  "ud-icon-calendar",
  "ud-icon-trash",
  "ud-icon-health",
  "ud-icon-provider",
  "ud-icon-bloodwork",
  "ud-icon-edit",
  "ud-icon-alert",
  "ud-icon-warning",
  "ud-icon-dropdown",
  "ud-icon-search",
  "ud-icon-expand",
  "ud-icon-collapse",
  "ud-icon-check",
  "ud-icon-exit",
  "ud-icon-left",
  "ud-icon-right",
  "ud-icon-refresh",
  "ud-icon-transfer"
]

let i = 0;

export default function Grid(){

  return(
    <div className = {cx(s.grid)}>
      {iconList.map((icon) =>{
        if (i % 4 === 0){
          i++;
          return(
            <div className={cx(s.row)} key = {'row'+icon}>
              <div className={cx(s.boxLeft)} key = {icon}>
                <div className={cx(s[icon])}></div>
                <div className={cx(s.label)}>.{icon}</div>
              </div>
            </div>
          )
        }
        else if (i % 4 === 3){
          i++;
          return(
            <div className={cx(s.boxRight)} key = {icon}>
              <div className={cx(s[icon])}></div>
              <div className={cx(s.label)}>.{icon}</div>
            </div>
          )
        }
        else {
          i++;
          return(
            <div className={cx(s.box)} key = {icon}>
              <div className={cx(s[icon])}></div>
              <div className={cx(s.label)}>.{icon}</div>
            </div>
          )
        }
      })}
    </div>
  )
}
