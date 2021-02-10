import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './nav';
import Content from './content';
import Player from './player';
import { Main, Analyzer } from '../components';

const App = ({ isAnalyzerShowing, ...props }) => {
  return (
    <React.Fragment>
      <Main.Group>
        <Nav {...props} />
        <Analyzer isAnalyzerShowing={isAnalyzerShowing}>
          <Analyzer.Render id="analyser_render" />
        </Analyzer>
        <Content {...props} />
      </Main.Group>
      <Player {...props} />
    </React.Fragment>
  );
};

App.propTypes = {
  isAnalyzerShowing: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isAnalyzerShowing: state.uiState.isAnalyzerShowing
  };
};

export default connect(mapStateToProps)(App);
