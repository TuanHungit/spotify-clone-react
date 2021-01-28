import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../actions';
import styled from 'styled-components/macro';
const Header = styled.h1``;
const Home = ({ tracks, onFetchTracks }) => {
  useEffect(() => {
    onFetchTracks(1);
  }, []);

  console.log(tracks);
  return <Header>Hello</Header>;
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
