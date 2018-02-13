import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import PatientPortal from './components/patient_portal';
import WebApp from './components/web_app';
import Kiosk from './components/kiosk';
import NavBar from './components/navbar/nav_bar';

import './style/index.css';


const customTheme = {
  fontFamily : 'Quicksand',
  palette : {
    primary1Color : '#2d9d9c',
    primary2Color : '#2d9d9c',
    primary3Color : '#2d9d9c',
    accent1Color : '#2d9d9c',
    accent2Color : '#2d9d9c',
    accent3Color : '#2d9d9c',
    textColor : '#5c5c5c',
    pickerHeaderColor : '#2d9d9c'
  }
}

const theme = getMuiTheme(customTheme);


ReactDOM.render(
  <MuiThemeProvider muiTheme = {theme}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={PatientPortal}/>
        <Route exact path="/patientPortal" component={PatientPortal}/>
        <Route exact path="/webApp" component={WebApp}/>
        <Route exact path="/kiosk" component={Kiosk}/>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
