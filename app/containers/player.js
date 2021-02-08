import React, { useEffect, useState, useRef } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Player, LinksByComma } from '../components';
import { requestInterval, clearRequestInterval } from '../requestInterval';
import * as actionCreator from '../actions';
import * as SVG from '../svgs';
import { formatTime } from '../utils/func';

const PlayerContainer = props => {
  const {
    songData,
    isFetching,
    onSetPlaying,
    isPlaying,
    routing,
    playerState
  } = props;
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const onLoadedData = () => {
    setDuration(audioRef.current.duration);
    onSetPlaying(true);
    audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    onSetPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    const lyric = songData.lyric;
    const { lyric1, lyric2 } = playerState;
  };
  return (
    <Player>
      <Player.Group size="30%" justifyContent="flex-start">
        {songData ? (
          <React.Fragment>
            <audio
              ref={audioRef}
              src={songData.source && songData.source['128']}
              crossOrigin="anonymous"
              loop={loop}
              onLoadedData={onLoadedData}
              onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
              onEnded={() => setPlaying(false)}
            />
            <Player.Image src={songData.thumbnail} alt="thumbnail" />
            <Player.Group size={'50%'} direction="column">
              <Player.Title>{songData.name}</Player.Title>
              <LinksByComma
                artists={songData.artists}
                definePath={link => link.replace('/nghe-si/', '/artist/')}
                defineTitle={title =>
                  title.replace('Nhiều nghệ sĩ', 'Various artists')
                }
                titleEntry="name"
                pathEntry="link"
              />
            </Player.Group>
          </React.Fragment>
        ) : null}
      </Player.Group>

      <Player.Group size="40%" direction="column" justifyContent="center">
        <Player.Group size="100%" justifyContent="center">
          <Player.WrapperIcon>
            <Player.Icon src={SVG.shuffleStracks} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={SVG.prevStacks} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon background="white">
            <Player.Icon
              src={isPlaying ? SVG.pause : SVG.play}
              onClick={handlePausePlayClick}
              isPlaying={isPlaying}
            />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={SVG.prevStacks} rotate={'180deg'} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={SVG.repeatStracks} opacity={0.5} />
          </Player.WrapperIcon>
        </Player.Group>
        <Player.Group size="100%" justifyContent="center">
          <Player.TimeSeek>
            {currentTime ? formatTime(currentTime) : '0:00'}
          </Player.TimeSeek>
          <InputRange
            maxValue={duration}
            minValue={0}
            value={parseInt(currentTime, 10)}
          />
          <Player.TimeSeek>
            {duration ? formatTime(duration) : '0:00'}
          </Player.TimeSeek>
        </Player.Group>
      </Player.Group>
      <Player.Group size="30%" justifyContent="flex-end">
        <Player.WrapperIcon
          to={`${routing.locationBeforeTransitions.pathname}/karaoke`}
        >
          <Player.Icon src={SVG.lyrics} />
        </Player.WrapperIcon>
        <Player.WrapperIcon>
          <Player.Icon src={SVG.queueStracks} />
        </Player.WrapperIcon>
      </Player.Group>
    </Player>
  );
};

PlayerContainer.propTypes = {
  songdata: PropTypes.object.isRequired,
  fetchSong: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { songState, routing, uiState, playerState } = state;
  return {
    songData: songState.data,
    isFetching: songState.isFetching,
    isPlaying: uiState.isPlaying,
    routing,
    playerState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchSong: (id, name) => dispatch(actionCreator.fetchSong(id, name)),
    onSetPlaying: isPlaying => dispatch(actionCreator.setPlaying(isPlaying)),
    onUpdateLyric: percent =>
      dispatch(actionCreator.updatePlayedPercent(percent))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
