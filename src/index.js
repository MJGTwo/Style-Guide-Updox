import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Demo from './demo';

ReactDOM.render(
  <BrowserRouter>
    <Demo />
  </BrowserRouter>,
  document.querySelector('#root')
);
