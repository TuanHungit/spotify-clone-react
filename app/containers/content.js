import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import _throttle from 'lodash.throttle';

import { fetchTracks } from '../actions';
import { Main } from '../components';
import routes from '../routes';
import Header from './header';

const NUMBER_OF_PAGES = 5;

const Content = props => {
  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    _throttle(() => {
      const el = document.getElementById('content');
      if (el.scrollTop > 150 && !scroll) {
        setScroll(state => {
          if (state) {
            return;
          }
          return true;
        });
      } else if (el.scrollTop < 150) {
        setScroll(false);
      }

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
      <Main.UpperNav
        id="navbar"
        color={props.color && !props.isLoading ? props.color : null}
        scroll={scroll}
      >
        <Header />
      </Main.UpperNav>
      <Main.Content>
        {/* <Suspense fallback={<div></div>}> */}
        {/* <ScrollToTop>
          
        </ScrollToTop> */}
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
    isLoading: state.tracksState.isLoading,
    activeId: state.tracksState.activeId,
    color: state.uiState.color
  };
};
export default connect(mapStateToProps, { fetchTracks })(Content);
