import * as TYPES from '../contanst/action-types';

const initialState = {
  activeId: '',
  tracks: [],
  pageLoaded: 1,
  isLoading: false
};

const fetchTracksSuccess = (state, action) => {
  let tracks = state.tracks;
  if (state.tracks.length && state.tracks[0] !== action.tracks[0]) {
    tracks = tracks.concat(action.tracks);
  }
  let pageLoaded = action.page ? action.page : state.pageLoaded;
  if (action.id !== state.activeId) {
    tracks = action.tracks;
    pageLoaded = 1;
  }
  return {
    ...state,
    pageLoaded,
    tracks,
    activeId: action.id,
    isLoading: false
  };
};
export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.START_FETCHING_TRACKS:
      return { ...state, isLoading: true };
    case TYPES.FETCH_TRACKS_SUCCESS:
      return fetchTracksSuccess(state, action);
    case TYPES.FETCH_TRACKS_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}