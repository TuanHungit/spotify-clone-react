import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Player, LinksByComma } from '../components';
import { initAnalyzer } from '../utils/initAnalyzer';
import * as actionCreator from '../actions';
import * as SVG from '../svgs';
import { formatTime, changeAlias } from '../utils/func';

const PlayerContainer = ({
  songData,
  onAddSongToQueue,
  isFetching,
  onSetPlaying,
  isPlaying,
  routing,
  playerState,
  onUpdateLyric,
  url,
  onFetchSong,
  onUpdateLyricPercent,
  tracks,
  queue,
  fetchSongError,
  ...props
}) => {
  const audioRef = useRef();
  const history = useHistory();
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [karaoke, setKaraoke] = useState(false);
  const [queueSong, setQueue] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (fetchSongError) {
      onPlayPrevOrNextSong();
    }
  }, [fetchSongError]);

  useEffect(() => {
    if (!isFetching) {
      setIndex(0);
    }
  }, [isFetching]);

  const onPlay = () => {
    onSetPlaying(true);
  };

  const onLoadedData = () => {
    setDuration(audioRef.current.duration);
    audioRef.current.play();
    onSetPlaying(true);
    onAddSongToQueue(songData, tracks);
    initAnalyzer(audioRef.current);
  };

  const onEnded = () => {
    onSetPlaying(false);
    setCurrentTime(0);
    onPlayPrevOrNextSong();
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
    const len = lyric.length;
    if (
      (len > 0 && audioRef.current.currentTime > lyric[lyric.length - 1].end) ||
      audioRef.current.currentTime
    ) {
      onUpdateLyric([], []);
    }
    for (let i = 0; i < lyric.length; i = i + 2) {
      if (
        audioRef.current.currentTime >= lyric[i].start &&
        audioRef.current.currentTime <= lyric[i + 1].end
      ) {
        onUpdateLyric(lyric[i], lyric[i + 1]);
      }
    }
    setCurrentTime(audioRef.current.currentTime);
  };

  const onHandleChange = value => {
    setCurrentTime(value);
  };

  const onHandleChangeComplete = value => {
    if (value == duration) {
      onUpdateLyric([], []);
    }
    audioRef.current.currentTime = value;
    audioRef.current.play();
  };

  const onPlayPrevOrNextSong = prevOrnext => {
    if (queue.length > 0) {
      const { name, alias, id } = queue[index];
      onFetchSong(id, alias ? alias : changeAlias(name));
    }
    onAddSongToQueue(songData, tracks);
    setIndex(state => state + 1);
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
              onPlay={onPlay}
              onLoadedData={onLoadedData}
              onTimeUpdate={handleTimeUpdate}
              onEnded={onEnded}
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
            <Player.Icon
              src={SVG.shuffleStracks}
              opacity={0.5}
              isClicked={shuffle}
              onClick={() => setShuffle(state => !state)}
            />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon
              src={SVG.prevStacks}
              opacity={0.5}
              size="20px"
              onClick={() => onPlayPrevOrNextSong('prev')}
            />
          </Player.WrapperIcon>
          <Player.WrapperIcon background="white">
            <Player.Icon
              src={isPlaying ? SVG.pause : SVG.play}
              onClick={handlePausePlayClick}
              isPlaying={isPlaying}
            />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon
              src={SVG.prevStacks}
              rotate={'180deg'}
              size="20px"
              opacity={0.5}
              onClick={() => onPlayPrevOrNextSong('next')}
            />
          </Player.WrapperIcon>
          <Player.WrapperIcon>
            <Player.Icon
              src={SVG.repeatStracks}
              opacity={0.5}
              isClicked={loop}
              onClick={() => setLoop(state => !state)}
            />
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
            onChange={onHandleChange}
            onChangeComplete={onHandleChangeComplete}
          />
          <Player.TimeSeek>
            {duration ? formatTime(duration) : '0:00'}
          </Player.TimeSeek>
        </Player.Group>
      </Player.Group>
      <Player.Group size="30%" justifyContent="flex-end">
        <Player.WrapperIcon
          to={songData ? `/tracks/${changeAlias(songData.name)}/karaoke` : '#'}
        >
          <Player.Icon
            src={SVG.lyrics}
            isClicked={karaoke}
            onClick={() => {
              setKaraoke(state => {
                const isClicked = state;
                setQueue(state => {
                  if (!state) {
                    return;
                  }
                  return isClicked;
                });
                if (isClicked) {
                  history.push(`/tracks/${url}`);
                }
                return !state && songData;
              });
            }}
          />
        </Player.WrapperIcon>
        <Player.WrapperIcon
          to={songData ? `/tracks/${changeAlias(songData.name)}/queue` : '#'}
        >
          <Player.Icon
            src={SVG.queueStracks}
            isClicked={queueSong}
            onClick={() => {
              setQueue(state => {
                const isClicked = state;
                setKaraoke(state => {
                  if (!state) {
                    return;
                  }
                  return isClicked;
                });
                if (isClicked) {
                  history.push(`/tracks/${url}`);
                }
                return !state && songData;
              });
            }}
          />
        </Player.WrapperIcon>
      </Player.Group>
    </Player>
  );
};

PlayerContainer.propTypes = {
  songdata: PropTypes.object.isRequired,
  fetchSong: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  routing: PropTypes.object.isRequired,
  playerState: PropTypes.object.isRequired,
  onSetPlaying: PropTypes.func.isRequired,
  onUpdateLyric: PropTypes.func.isRequired,
  onUpdateLyricPercent: PropTypes.func.isRequired,
  onAddSongToQueue: PropTypes.func.isRequired,
  tracks: PropTypes.array.isRequired,
  queue: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const {
    songState,
    routing,
    uiState,
    playerState,
    tracksState,
    queueState
  } = state;
  return {
    songData: songState.data,
    isFetching: songState.isFetching,
    fetchSongError: songState.error,
    isPlaying: uiState.isPlaying,
    routing,
    tracks: tracksState.tracks,
    url: tracksState.url,
    queue: queueState.queue,
    playerState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchSong: (id, name) => dispatch(actionCreator.fetchSong(id, name)),
    onSetPlaying: isPlaying => dispatch(actionCreator.setPlaying(isPlaying)),
    onUpdateLyric: (lyric1, lyric2) =>
      dispatch(actionCreator.updateLyric(lyric1, lyric2)),
    onUpdateLyricPercent: () => dispatch(actionCreator.updateLyricsPercent()),
    onAddSongToQueue: (songData, tracks) =>
      dispatch(actionCreator.addSongToQueue(songData, tracks))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
