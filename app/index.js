import React from 'react';
import { render } from 'react-dom';

import { GlobalStyles } from './global-styles';
import App from './containers/App';
render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById('app')
);
