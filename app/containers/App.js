import React from 'react';
import Nav from './nav';
import Main from './main';

import MusicControl from './musicControl';
import { Main as MainComponent } from '../components';
export default () => {
  return (
    <React.Fragment>
      <MainComponent.Group>
        <Nav />
        <Main />
      </MainComponent.Group>
      <MusicControl />
    </React.Fragment>
  );
};
