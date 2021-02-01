import React from 'react';
import Nav from './nav';
import Main from './main';

import Player from './player';
import { Main as MainComponent } from '../components';
export default () => {
  return (
    <React.Fragment>
      <MainComponent.Group>
        <Nav />
        <Main />
      </MainComponent.Group>
      <Player />
    </React.Fragment>
  );
};
