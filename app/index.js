import React from 'react';
import { render } from 'react-dom';

import { GlobalStyles } from './global-styles';
import App from './containers/App';
import './styles/input-range/input-range.scss';
render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('app')
);
