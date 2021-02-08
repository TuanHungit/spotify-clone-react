import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './global-styles';
import App from './containers/App';
import store from './store';
import './styles/input-range/input-range.scss';
import { Provider } from 'react-redux';
import history from './history';

render(
  <React.Fragment>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById('app')
);
