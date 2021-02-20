import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Tracks, PageInfo, LazyLoad, LinksByComma } from '../components';
import { formatTime } from '../utils/func';
import * as SVG from '../svgs';

const Queue = props => {
  const { songData, isPlaying, queue } = props;
  useEffect(() => {
    document.getElementById('content').scrollTo(0, 0);
  }, []);
  return (
    <PageInfo bg={false}>
      <PageInfo.Content>
        <PageInfo.Title size="24px">Queue</PageInfo.Title>
        <PageInfo.Text>Now Playing</PageInfo.Text>
        {songData ? (
          <Tracks.Item hover isPlaying={isPlaying} isPlayer={true}>
            <Tracks.Group size={'80px'}>
              <Tracks.Order>01</Tracks.Order>
              <Tracks.Icon isPlaying={isPlaying} src={SVG.play} />
              <LazyLoad src={songData.thumbnail} alt="Thumbnail" size={45} />
            </Tracks.Group>
            <Tracks.Group size={'100%'}>
              <Tracks.Group size={'50%'} direction="column">
                <Tracks.Title>{songData.name}</Tracks.Title>
                <LinksByComma
                  artists={songData.artists}
                  definePath={link => link.replace('/nghe-si/', '/artist/')}
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
                  {songData.album ? songData.album.name : 'Không có'}
                </Tracks.SubTitle>
              </Tracks.Group>
              <Tracks.Group size={'20%'} justifyContent="flex-end">
                <Tracks.Icon src={SVG.heart} size="17px" />
                <Tracks.SubTitle>
                  {formatTime(songData.duration)}
                </Tracks.SubTitle>
                <Tracks.Icon src={SVG.more} />
              </Tracks.Group>
            </Tracks.Group>
          </Tracks.Item>
        ) : null}
        <PageInfo.Text>Next from: Bùi Anh Tuấn</PageInfo.Text>
        {queue
          ? queue.map((el, key) => (
              <Tracks.Item
                hover
                key={key}
                onClick={() => props.onFetchSong(el.id, changeAlias(el.name))}
                isPlaying={false}
                isPlayer={false}
              >
                <Tracks.Group size={'80px'}>
                  <Tracks.Order>{key + 2}</Tracks.Order>
                  <Tracks.Icon isPlaying={false} src={SVG.play} />
                  <LazyLoad src={el.thumbnail} alt="Thumbnail" size={45} />
                </Tracks.Group>
                <Tracks.Group size={'100%'}>
                  <Tracks.Group size={'50%'} direction="column">
                    <Tracks.Title>{el.name}</Tracks.Title>
                    <LinksByComma
                      artists={el.artists}
                      definePath={link => link.replace('/nghe-si/', '/artist/')}
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
                    <Tracks.SubTitle>{formatTime(el.duration)}</Tracks.SubTitle>
                    <Tracks.Icon src={SVG.more} />
                  </Tracks.Group>
                </Tracks.Group>
              </Tracks.Item>
            ))
          : null}
      </PageInfo.Content>
    </PageInfo>
  );
};

Queue.propTypes = {
  songData: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  queue: PropTypes.array.queue
};

const mapStateToProps = state => {
  return {
    songData: state.songState.data,
    isPlaying: state.uiState.isPlaying,
    queue: state.queueState.queue
  };
};
export default connect(mapStateToProps)(Queue);
