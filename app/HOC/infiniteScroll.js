import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _throttle from 'lodash.throttle';
import { fetchTracks } from '../actions';

const NUMBER_OF_PAGES = 5;

export default function (InnerComponent) {
  class InfiniteScroll extends Component {
    constructor(props) {
      super(props);
      this.onScroll = this.onScroll.bind(this);
    }
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
    onScroll() {
      _throttle(() => {
        if (
          window.scrollY + window.innerHeight >=
          document.body.offsetHeight - 200
        ) {
          if (
            this.props.pageLoaded < NUMBER_OF_PAGES &&
            !this.props.isLoading
          ) {
            console.log(this.nv.clientHeight);
            const page = this.props.pageLoaded + 1;
            this.props.fetchTracks(page, this.props.activeId);
          }
        }
      }, 100);
    }

    render() {
      return <InnerComponent {...this.props} />;
    }
  }

  InfiniteScroll.propTypes = {
    fetchTracks: PropTypes.func.isRequired,
    pageLoaded: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    activeId: PropTypes.string.isRequired
  };

  return connect(
    state => ({
      pageLoaded: state.tracksState.pageLoaded,
      isLoading: state.tracksState.isLoading,
      activeId: state.tracksState.activeId
    }),
    { fetchTracks }
  )(InfiniteScroll);
}
