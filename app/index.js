import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store from './store';
import routes from './routes';
import history from './history';
import { GlobalStyles } from './global-styles';
import Nav from './containers/nav';
render(
  <React.Fragment>
    <GlobalStyles />
    <Nav />
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        onUpdate={() => window.scrollTo(0, 0)}
      />
    </Provider>
  </React.Fragment>,
  document.getElementById('app')
);
