import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';

import HomePage from './pages/home';
import Tracks from './pages/tracks';
import App from './containers/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/tracks/:slug" component={Tracks} />
  </Route>
);
