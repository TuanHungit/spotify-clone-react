import React, { useEffect, useState, useRef } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Player, LinksByComma } from '../components';
import { requestInterval, clearRequestInterval } from '../requestInterval';
import * as actionCreator from '../actions';
import play from '../svgs/play.svg';
import prevStacks from '../svgs/prevStracks.svg';
import shuffleStracks from '../svgs/shuffleStracks.svg';
import repeatStracks from '../svgs/repeatStracks.svg';
import queueStracks from '../svgs/queueStracks.svg';
import lyrics from '../svgs/lyrics.svg';
import pause from '../svgs/pause.svg';
import { formatTime } from '../utils/func';
const PlayerContainer = props => {
  const { songData, isFetching } = props;
  const audioRef = useRef();
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const onLoadedData = () => {
    setDuration(audioRef.current.duration);
    setPlaying(!isPlaying);
    audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
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
            <Player.Title>{songData.name}</Player.Title>
          </React.Fragment>
        ) : null}

        {/* <LinksByComma /> */}
      </Player.Group>

      <Player.Group size="40%" direction="column" justifyContent="center">
        <Player.Group size="100%" justifyContent="center">
          <Player.WrapperIcon>
            <Player.Icon src={shuffleStracks} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={prevStacks} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon background="white">
            <Player.Icon
              src={isPlaying ? pause : play}
              onClick={handlePausePlayClick}
              isPlaying={isPlaying}
            />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={prevStacks} rotate={'180deg'} opacity={0.5} />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon src={repeatStracks} opacity={0.5} />
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
        <Player.WrapperIcon>
          <Player.Icon src={lyrics} />
        </Player.WrapperIcon>
        <Player.WrapperIcon>
          <Player.Icon src={queueStracks} />
        </Player.WrapperIcon>
      </Player.Group>
    </Player>
  );
};

PlayerContainer.propTypes = {
  songdata: PropTypes.object.isRequired,
  fetchSong: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { songState, routing } = state;
  return {
    songData: songState.data,
    isFetching: songState.isFetching,
    routing
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchSong: (id, name) => dispatch(actionCreator.fetchSong(id, name))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
