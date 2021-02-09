import React from 'react';

import Nav from './nav';
import Content from './content';
import Player from './player';
import { Main, Analyzer } from '../components';

export default props => {
  return (
    <React.Fragment>
      <Main.Group>
        <Nav {...props} />
        <Content {...props} />
      </Main.Group>
      <Player {...props} />
      <Analyzer>
        <canvas
          id="analyser_render"
          style={{ width: '100%', height: '100%' }}
        />
      </Analyzer>
    </React.Fragment>
  );
};
