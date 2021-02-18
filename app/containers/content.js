import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import _throttle from 'lodash.throttle';

import { fetchTracks } from '../actions';
import { Main } from '../components';
import routes from '../routes';

const NUMBER_OF_PAGES = 5;

const Content = props => {
  const onScroll = () => {
    _throttle(() => {
      const el = document.getElementById('content');

      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 200) {
        if (props.pageLoaded < NUMBER_OF_PAGES && !props.isLoadMore) {
          const page = props.pageLoaded + 1;
          props.fetchTracks(page, props.activeId, true);
        }
      }
    }, 100)();
  };

  return (
    <Main onScroll={onScroll} id="content">
      <Main.UpperNav>dummy text</Main.UpperNav>
      <Main.Content>
        {/* <Suspense fallback={<div></div>}> */}
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              )
            );
          })}
        </Switch>
        {/* </Suspense> */}
      </Main.Content>
    </Main>
  );
};

const mapStateToProps = state => {
  return {
    pageLoaded: state.tracksState.pageLoaded,
    isLoadMore: state.tracksState.isLoadMore,
    activeId: state.tracksState.activeId
  };
};
export default connect(mapStateToProps, { fetchTracks })(Content);
