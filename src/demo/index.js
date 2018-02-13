import React from 'react';
import registerServiceWorker from '../registerServiceWorker';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import PatientPortal from './components/patient_portal';
import WebApp from './components/web_app';
import Kiosk from './components/kiosk';

import s from './style/index.css';

const customTheme = {
  fontFamily: 'Quicksand',
  palette: {
    primary1Color: '#2d9d9c',
    primary2Color: '#2d9d9c',
    primary3Color: '#2d9d9c',
    accent1Color: '#2d9d9c',
    accent2Color: '#2d9d9c',
    accent3Color: '#2d9d9c',
    textColor: '#5c5c5c',
    pickerHeaderColor: '#2d9d9c'
  }
};

const theme = getMuiTheme(customTheme);

export default function Demo() {
  return (
    <MuiThemeProvider muiTheme={theme}>
      <div className={s.styleguide}>
        {/* <NavBar /> */}
        <Route exact path="/" component={PatientPortal} />
        <Route exact path="/patientPortal" component={PatientPortal} />
        <Route exact path="/webApp" component={WebApp} />
        <Route exact path="/kiosk" component={Kiosk} />
      </div>
    </MuiThemeProvider>
  );
}

registerServiceWorker();
