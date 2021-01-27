import store from './store';
import { fetchTracks } from './actions/tracks';

export function fetchDataForHomePage() {
  const state = store.getState();

  if (!state.trackState.tracks.length) {
    // only fetch tracks if there is no trackss in the trackState
    store.dispatch(fetchTracks(1));
  }
}
