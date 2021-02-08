import React from 'react';
import { Route, IndexRoute } from 'react-router';

// const App = React.lazy(() => import('./containers/App'));
// const Tracks = React.lazy(() => import('./containers/tracks'));
// const Category = React.lazy(() => import('./containers/category'));
import { Category, Tracks, Karaoke } from './containers';

const routes = [
  { path: '/', exact: true, name: 'Home', component: Category },
  {
    path: '/tracks/:slug',
    exact: true,
    name: 'Tracks',
    component: Tracks
  },
  {
    path: '/tracks/:slug/karaoke',
    exact: true,
    name: 'Karaoke',
    component: Karaoke
  }
];

export default routes;
