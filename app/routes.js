import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';

import { App, Tracks, Category } from './containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Category} />
    <Route path="/tracks/:slug" component={Tracks} />
  </Route>
);
