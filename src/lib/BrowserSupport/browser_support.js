import React from 'react';
import cx from 'classnames';
// import {chrome, firefox, safari, ie} from './images';

import chrome from './images/chrome.png';
import safari from './images/safari.png';
import firefox from './images/firefox.png';
import ie from './images/ie.png';

import s from './browser_support.css';

export default function BrowserSupport(){



  return (
    <div className = {s.browser_support}>
      <div className = {cx(s.browser,s.left)}>
        <img src={chrome} alt = "chromeIcon" className = {s.iconLeft}/>
        <div className = {s.labelLeft}>
          Chrome
        </div>
      </div>
      <div className = {cx(s.browser,s.center)}>
        <img src={safari} alt = "SafariIcon" className = {s.icon}/>
        <div className = {s.label}>
          Safari
        </div>
      </div>
      <div className = {cx(s.browser,s.center)}>
        <img src={firefox} alt = "FirefoxIcon" className = {s.icon}/>
        <div className = {s.label}>
          Firefox
        </div>
      </div>
      <div className = {cx(s.browser,s.right)}>
        <img src={ie} alt = "Internet Explorer Icon" className = {s.icon}/>
        <div className = {s.label}>
          Internet Explorer
        </div>
      </div>
    </div>
  )
}
