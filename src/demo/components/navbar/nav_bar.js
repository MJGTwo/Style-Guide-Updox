import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './nav_bar.css';
import cx from 'classnames';

const linkStyleHelper = {
  textDecoration: 'none',
  margin: '0',
  color: 'inherit'
};

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'Patient Portal'
    };
  }

  onClickHelper = activeLink => {
    this.setState({ activeLink });
  };

  classnameHelper = name => {
    return cx('col-2', s.navLink, {
      [`${s.active}`]: this.state.activeLink === name
    });
  };

  render() {
    return (
      <div className={cx(s.nav, 'row')}>
        {/* <div className={cx('col-3', s.bannerBranding)} />
        <div
          onClick={() => {
            this.onClickHelper('Patient Portal');
          }}
          className={cx('col-3', this.classnameHelper('Patient Portal'))}
          style={{ width: '151px' }}
        >
          <Link to="/" style={linkStyleHelper}>
            Patient Portal
          </Link>
        </div>
        <div
          onClick={() => {
            this.onClickHelper('Web App');
          }}
          className={this.classnameHelper('Web App')}
          style={{ width: '115px' }}
        >
          <Link to="/webapp" style={linkStyleHelper}>
            Web App
          </Link>
        </div>
        <div
          onClick={() => {
            this.onClickHelper('Kiosk');
          }}
          className={this.classnameHelper('Kiosk')}
          style={{ width: '65px' }}
        >
          <Link to="/Kiosk" style={linkStyleHelper}>
            Kiosk
          </Link>
        </div> */}
      </div>
    );
  }
}
