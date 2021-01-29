import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faShare,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { Tracks, LazyLoad, Loader, LinksByComma } from '../components';
import InfiniteScroll from '../HOC/infiniteScroll';

const HomeContainer = ({ tracks, isFading, isLoading }) => {
  return (
    <Tracks>
      <Tracks.Inner>
        {tracks.map((el, key) => (
          <Tracks.Item key={key}>
            <Tracks.Group size={15}>
              <Tracks.Order>{el.order}</Tracks.Order>
              <LazyLoad src={el.thumbnail} alt="Thumbnail" size={60} />
            </Tracks.Group>
            <Tracks.Group size={85}>
              <Tracks.Group size={80} direction="column">
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
              <Tracks.Group size={20}>
                <Tracks.Actions>
                  <Tracks.ActionInner>
                    <FontAwesomeIcon icon={faDownload} color="#27ded5" />
                    <FontAwesomeIcon icon={faShare} color="#58d68d" />
                    <FontAwesomeIcon icon={faEllipsisH} color="gray" />
                  </Tracks.ActionInner>
                </Tracks.Actions>
              </Tracks.Group>
            </Tracks.Group>
          </Tracks.Item>
        ))}
        {isLoading && (
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
  );
};
HomeContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFading: PropTypes.bool.isRequired
};
export default InfiniteScroll(HomeContainer);
