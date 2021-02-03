import React from 'react';
import { render } from 'react-dom';

import { GlobalStyles } from './global-styles';
import App from './containers/App';
import store from './store';
import './styles/input-range/input-range.scss';
import { Provider } from 'react-redux';
render(
  <React.Fragment>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('app')
);
