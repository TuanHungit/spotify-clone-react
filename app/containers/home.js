import React from 'react';
import PropTypes from 'prop-types';

import { Tracks, LazyLoad, Loader } from '../components';
import InfiniteScroll from '../HOC/infiniteScroll';
const HomeContainer = ({ tracks, isFading, isLoading }) => {
  return (
    <Tracks>
      <Tracks.Inner>
        {tracks.map((el, key) => (
          <Tracks.Item key={key}>
            <Tracks.Group>
              <Tracks.Order>{el.order}</Tracks.Order>
              <LazyLoad src={el.thumbnail} alt="Thumbnail" />
              <Tracks.Title>{el.name}</Tracks.Title>
            </Tracks.Group>
            <Tracks.Actions>
              <Tracks.ActionInner>
                <Tracks.Share>Share</Tracks.Share>
                <Tracks.Share>...</Tracks.Share>
              </Tracks.ActionInner>
            </Tracks.Actions>
          </Tracks.Item>
        ))}
        {isLoading && (
          <Loader viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="3"
            />
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
