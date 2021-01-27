import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store from './store';
import routes from './routes';
import history from './history';
render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
      onUpdate={() => window.scrollTo(0, 0)}
    />
  </Provider>,
  document.getElementById('app')
);
