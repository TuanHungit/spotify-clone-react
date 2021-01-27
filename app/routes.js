import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchDataForHomePage } from './routes_callback';
import HomePage from './pages/home';
export default <Route path="/" component={HomePage}></Route>;
