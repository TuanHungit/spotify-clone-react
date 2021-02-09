import React from 'react';
import { connect } from 'react-redux';

import { Karaoke, Analyzer } from '../components';
import * as actionCreator from '../actions';

const KaraokeContainer = props => {
  const { per1, per2, lyric1, lyric2 } = props.playerState;
  const { lyric, isFetching } = props;
  return (
    <Karaoke>
      <Karaoke.Text>
        {lyric1.text ? lyric1.text : "Sorry, We can't find lyric!"}
      </Karaoke.Text>
      <Karaoke.Text>{lyric2.text}</Karaoke.Text>
    </Karaoke>
  );
};

const mapStateToProps = state => {
  const { playerState, songState } = state;
  return {
    playerState,
    lyric: songState.data ? songState.data.lyric : null,
    isFetching: songState.isFetching
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdatePlayedPercent: () => dispatch(actionCreator.updatePlayedPercent())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KaraokeContainer);
