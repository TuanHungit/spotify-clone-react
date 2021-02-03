import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';
import history from '../history';

import { Main, Header } from '../components';

export default () => {
  return (
    <Main>
      <Main.UpperNav>dummy text</Main.UpperNav>
      <Main.Content>
        <Router
          history={history}
          routes={routes}
          onUpdate={() => window.scrollTo(0, 0)}
        />
      </Main.Content>
    </Main>
  );
};
