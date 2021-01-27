import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../actions';
const Home = ({ tracks, onFetchTracks }) => {
  useEffect(() => {
    onFetchTracks(1);
  }, []);

  console.log(tracks);
  return <div>Hello</div>;
};

const mapStateToProps = state => {
  return {
    tracks: state.tracksState.tracks,
    isLoading: state.tracksState.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchTracks: (page, tracksId) =>
      dispatch(actionCreator.fetchTracks(page, tracksId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
