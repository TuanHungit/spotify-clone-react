import React from 'react';
import PropTypes from 'prop-types';
export const HomeContainer = ({ ...restProps }) => {
  return (
    <div className="homepage home-container">
      <div className="home-nav"></div>
      <TrackList {...restProps} />
    </div>
  );
};
HomeContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFading: PropsTypes.bool.isRequired
};
