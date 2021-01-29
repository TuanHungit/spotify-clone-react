import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../actions';

import TracksContainer from '../containers/tracks';
const Home = props => {
  useEffect(() => {
    props.onFetchTracks(1);
  }, []);

  return <TracksContainer {...props} />;
};

const mapStateToProps = state => {
  return {
    tracks: state.tracksState.tracks,
    isLoading: state.tracksState.isLoading,
    isFading: state.uiState.isFading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchTracks: (page, tracksId) =>
      dispatch(actionCreator.fetchTracks(page, tracksId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
