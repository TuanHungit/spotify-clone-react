import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Main, Loader } from '../components';
import routes from '../routes';

const Content = props => {
  return (
    <Main>
      <Main.UpperNav>dummy text</Main.UpperNav>
      <Main.Content>
        {/* <Suspense fallback={<div></div>}> */}
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              )
            );
          })}
        </Switch>
        {/* </Suspense> */}
      </Main.Content>
    </Main>
  );
};

export default Content;
