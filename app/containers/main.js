import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import store from '../store';
import routes from '../routes';
import history from '../history';

import { Main, Header } from '../components';

export default () => {
  return (
    <Main>
      <Main.UpperNav>dummy text</Main.UpperNav>
      <Main.Content>
        <Provider store={store}>
          <Router
            history={history}
            routes={routes}
            onUpdate={() => window.scrollTo(0, 0)}
          />
        </Provider>
      </Main.Content>
    </Main>
  );
};
