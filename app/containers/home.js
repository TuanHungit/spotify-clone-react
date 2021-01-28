import React from 'react';
import PropTypes from 'prop-types';

import { Tracks, LazyLoad } from '../components';

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
      </Tracks.Inner>
    </Tracks>
  );
};
HomeContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFading: PropTypes.bool.isRequired
};
export default HomeContainer;
