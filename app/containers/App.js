import React from 'react';

import Nav from './nav';
import Content from './content';
import Player from './player';
import { Main } from '../components';

export default props => {
  return (
    <React.Fragment>
      <Main.Group>
        <Nav {...props} />
        <Content {...props} />
      </Main.Group>
      <Player {...props} />
    </React.Fragment>
  );
};
