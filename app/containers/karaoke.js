import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Karaoke, Loader } from '../components';
import * as actionCreator from '../actions';

const KaraokeContainer = ({ color, playerState, onSetShowAnalyzer }) => {
  const { per1, per2, lyric1, lyric2 } = playerState;

  useEffect(() => {
    onSetShowAnalyzer(true);
    return () => onSetShowAnalyzer(false);
  }, []);
  console.log(lyric1, lyric2);
  return (
    <Karaoke color={color}>
      {lyric1.length === 0 && <Loader color="white" center />}
      {lyric1.length != 0 && (
        <Karaoke.Text active={lyric1.length !== 0}>{lyric1.text}</Karaoke.Text>
      )}
      {lyric2.length != 0 && (
        <Karaoke.Text active={lyric2.length !== 0}> {lyric2.text}</Karaoke.Text>
      )}
    </Karaoke>
  );
};

const mapStateToProps = state => {
  const { playerState, songState, uiState } = state;
  return {
    playerState,
    isAnalyzerShowing: uiState.isAnalyzerShowing,
    lyric: songState.data ? songState.data.lyric : null,
    isFetching: songState.isFetching,
    color: uiState.color
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdatePlayedPercent: () => dispatch(actionCreator.updatePlayedPercent()),
    onSetShowAnalyzer: isShowing =>
      dispatch(actionCreator.setShowAnalyzer(isShowing))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KaraokeContainer);
