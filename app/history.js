import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

/*import { clearAlbums } from './actions/album';*/
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

history.listen(location => {
  const state = store.getState();

  /* if (location && !/album\//.test(location.pathname) && state.albumState.albums.length) {
    // Clear the albums state if the user navigate out of the `/album/:title/:id` route
    store.dispatch(clearAlbums());
  }*/
  // hide the analyzer if the current route doesn't match `/song/{songname}/id`
  if (location && /song\//.test(location.pathname)) return;

  //   const analyzerVisibility = state.UIState.showAnalyzer;
});

export default history;
