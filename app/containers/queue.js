import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Tracks, PageInfo } from '../components';
const Queue = props => {
  return (
    <PageInfo bg={false}>
      <PageInfo.Content>
        <PageInfo.Title size="24px">Queue</PageInfo.Title>
        <PageInfo.Text>Now Playing</PageInfo.Text>
      </PageInfo.Content>
    </PageInfo>
  );
};

const mapStateToProps = state => {
  return {};
};
export default Queue;
