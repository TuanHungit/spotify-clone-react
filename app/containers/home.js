import React from 'react';
import PropTypes from 'prop-types';

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
              <Tracks.Group size={70} direction="column">
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

              <Tracks.Actions>
                <Tracks.ActionInner>
                  <Tracks.Download>Download</Tracks.Download>
                  <Tracks.Share>Share</Tracks.Share>
                  <Tracks.Share>...</Tracks.Share>
                </Tracks.ActionInner>
              </Tracks.Actions>
            </Tracks.Group>
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
