import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreator from '../actions';

import { Tracks, LazyLoad, Loader, LinksByComma, Player } from '../components';
import { PageInfo } from '../components';
import * as SVG from '../svgs';
import { changeAlias, formatTime, getRandomColor } from './../utils/func';

import dataCategories from '../components/category/categoryData';

const TracksContainer = props => {
  const {
    tracks,
    isLoading,
    isLoadMore,
    songData,
    isPlaying,
    onFetchSong,
    onFetchTracks,
    onClearTracks,
    onSetColor,
    onClearColor,
    color
  } = props;

  const { id, title, cover, desc } = props.location.state
    ? props.location.state
    : dataCategories.find(el => el.alias === props.match.params.slug);

  useEffect(() => {
    onFetchTracks(1, id);

    return () => {
      onClearTracks();
      onClearColor();
    };
  }, []);

  useEffect(() => {
    onSetColor(getRandomColor());
    if (tracks.length !== 0 && songData === null) {
      onFetchSong(tracks[0].id, changeAlias(tracks[0].name));
    }
  }, [tracks]);
  return (
    <React.Fragment>
      {!isLoading ? (
        <PageInfo color={color}>
          <PageInfo.Wrapper>
            <PageInfo.Group padding="30px">
              <PageInfo.Image src={cover} />
              <PageInfo.Content>
                <PageInfo.Title uppercase size="12px">
                  Playplist
                </PageInfo.Title>
                <PageInfo.Title>{title}</PageInfo.Title>
                <PageInfo.SubTitle>{desc}</PageInfo.SubTitle>
                <PageInfo.Group>
                  <PageInfo.Text>Spotify</PageInfo.Text>
                  <PageInfo.Text>699,428 likes</PageInfo.Text>
                  <PageInfo.Text>4hr 35 min</PageInfo.Text>
                </PageInfo.Group>
              </PageInfo.Content>
            </PageInfo.Group>
            <PageInfo.Group>
              <PageInfo.PlayIcon
                isPlaying={isPlaying}
                size="50px"
                src={isPlaying ? SVG.pause : SVG.play}
                background={'#1db954'}
              />
              <PageInfo.PlayIcon src={SVG.heart} />
              <PageInfo.PlayIcon src={SVG.note} />
            </PageInfo.Group>

            <Tracks>
              <Tracks.Inner>
                <Tracks.Item>
                  <Tracks.Group size={'80px'}>
                    <Tracks.Order>#</Tracks.Order>
                  </Tracks.Group>
                  <Tracks.Group size={'100%'}>
                    <Tracks.Group size={'50%'} direction="column">
                      Title
                    </Tracks.Group>
                    <Tracks.Group size="30%">
                      <Tracks.SubTitle>Album</Tracks.SubTitle>
                    </Tracks.Group>
                    <Tracks.Group size={'20%'} justifyContent="flex-end">
                      <Tracks.SubTitle>Time</Tracks.SubTitle>
                    </Tracks.Group>
                  </Tracks.Group>
                </Tracks.Item>
                <Tracks.Break />
                {tracks.map((el, key) => (
                  <Tracks.Item
                    hover
                    key={key}
                    onClick={() =>
                      props.onFetchSong(el.id, changeAlias(el.name))
                    }
                    isPlaying={songData && songData.id === el.id && isPlaying}
                    isPlayer={songData && songData.id === el.id}
                  >
                    <Tracks.Group size={'80px'}>
                      <Tracks.Order>{el.order}</Tracks.Order>
                      <Tracks.Icon
                        isPlaying={
                          songData && songData.id === el.id && isPlaying
                        }
                        src={SVG.play}
                      />
                      <LazyLoad src={el.thumbnail} alt="Thumbnail" size={45} />
                    </Tracks.Group>
                    <Tracks.Group size={'100%'}>
                      <Tracks.Group size={'50%'} direction="column">
                        <Tracks.Title>{el.name}</Tracks.Title>
                        <LinksByComma
                          artists={el.artists}
                          definePath={link =>
                            link.replace('/nghe-si/', '/artist/')
                          }
                          defineTitle={title =>
                            title.replace('Nhiều nghệ sĩ', 'Various artists')
                          }
                          titleEntry="name"
                          pathEntry="link"
                        />
                      </Tracks.Group>
                      <Tracks.Group size="30%">
                        <Tracks.SubTitle>
                          {' '}
                          {el.album ? el.album.name : 'Không có'}
                        </Tracks.SubTitle>
                      </Tracks.Group>
                      <Tracks.Group size={'20%'} justifyContent="flex-end">
                        <Tracks.Icon src={SVG.heart} size="17px" />
                        <Tracks.SubTitle>
                          {formatTime(el.duration)}
                        </Tracks.SubTitle>
                        <Tracks.Icon src={SVG.more} />
                      </Tracks.Group>
                    </Tracks.Group>
                  </Tracks.Item>
                ))}
                {isLoadMore && <Loader />}
              </Tracks.Inner>
            </Tracks>
          </PageInfo.Wrapper>
        </PageInfo>
      ) : (
        <Loader center />
      )}
    </React.Fragment>
  );
};
TracksContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFading: PropTypes.bool.isRequired,
  songData: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoadMore: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    tracks: state.tracksState.tracks,
    isLoading: state.tracksState.isLoading,
    isFading: state.uiState.isFading,
    songData: state.songState.data,
    isPlaying: state.uiState.isPlaying,
    isLoadMore: state.tracksState.isLoadMore,
    color: state.uiState.color
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchTracks: (page, tracksId) =>
      dispatch(actionCreator.fetchTracks(page, tracksId)),
    onClearTracks: () => dispatch(actionCreator.clearTracks()),
    onClearColor: () => dispatch(actionCreator.clearColor()),
    onFetchSong: (id, name) => dispatch(actionCreator.fetchSong(id, name)),
    onSetColor: color => dispatch(actionCreator.setColor(color))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TracksContainer);
