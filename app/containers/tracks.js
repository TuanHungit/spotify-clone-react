import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreator from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faShare,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { Tracks, LazyLoad, Loader, LinksByComma } from '../components';
import InfiniteScroll from '../HOC/infiniteScroll';
import { PageInfo } from '../components';
import play from '../svgs/play.svg';
import heart from '../svgs/heart.svg';
import note from '../svgs/note.svg';
import { changeAlias } from './../utils/func';

const TracksContainer = props => {
  const { id, name, img, desc } = props.location.state;
  useEffect(() => {
    props.onFetchTracks(1, id);
  }, [id]);
  return (
    <PageInfo>
      <PageInfo.Wrapper>
        <PageInfo.Group padding="30px">
          <PageInfo.Image src={img} />
          <PageInfo.Content>
            <PageInfo.Title uppercase size="6rem">
              Playplist
            </PageInfo.Title>
            <PageInfo.Title>{name}</PageInfo.Title>
            <PageInfo.SubTitle>{desc}</PageInfo.SubTitle>
            <PageInfo.Group>
              <PageInfo.Text>Spotify</PageInfo.Text>
              <PageInfo.Text>699,428 likes</PageInfo.Text>
              <PageInfo.Text>4hr 35 min</PageInfo.Text>
            </PageInfo.Group>
          </PageInfo.Content>
        </PageInfo.Group>
        <PageInfo.Group>
          <PageInfo.PlayIcon src={play} background={'#1db954'} />
          <PageInfo.PlayIcon src={heart} />
          <PageInfo.PlayIcon src={note} />
        </PageInfo.Group>

        <Tracks>
          <Tracks.Inner>
            {props.tracks.map((el, key) => (
              <Tracks.Item
                key={key}
                onClick={() => props.onFetchSong(el.id, changeAlias(el.name))}
              >
                <Tracks.Group size={'80px'}>
                  <Tracks.Order>{el.order}</Tracks.Order>
                  <LazyLoad src={el.thumbnail} alt="Thumbnail" size={45} />
                </Tracks.Group>
                <Tracks.Group size={'93%'}>
                  <Tracks.Group size={'50%'}>
                    <Tracks.Title>{el.name}</Tracks.Title>
                  </Tracks.Group>
                  <Tracks.Group size="30%">
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
                  <Tracks.Group size={'20%'}>
                    <Tracks.Actions>
                      <Tracks.ActionInner>
                        {/* <FontAwesomeIcon icon={faDownload} color="#27ded5" />
                        <FontAwesomeIcon icon={faShare} color="#58d68d" /> */}
                        <FontAwesomeIcon icon={faEllipsisH} color="white" />
                      </Tracks.ActionInner>
                    </Tracks.Actions>
                  </Tracks.Group>
                </Tracks.Group>
              </Tracks.Item>
            ))}
            {props.isLoading && (
              <Loader>
                <Loader.Item viewBox="0 0 50 50">
                  <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="3"
                  />
                </Loader.Item>
              </Loader>
            )}
          </Tracks.Inner>
        </Tracks>
      </PageInfo.Wrapper>
    </PageInfo>
  );
};
TracksContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFading: PropTypes.bool.isRequired
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
      dispatch(actionCreator.fetchTracks(page, tracksId)),
    onFetchSong: (id, name) => dispatch(actionCreator.fetchSong(id, name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfiniteScroll(TracksContainer));
