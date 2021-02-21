import * as TYPES from '../contanst/action-types';

const initialState = {
  activeId: '',
  tracks: [],
  pageLoaded: 1,
  isLoading: false,
  isLoadMore: false,
  url: ''
};

function compareTwoFirstTrack(track1, track2) {
  return track1.id === track2.id;
}

function fetchTrackSuccess(state, action) {
  let tracks = state.tracks;
  if (
    state.tracks.length &&
    !compareTwoFirstTrack(state.tracks[0], action.tracks[0])
  ) {
    tracks = tracks.concat(action.tracks);
  }
  let pageLoaded = action.page ? action.page : state.pageLoaded;

  if (action.id !== state.activeId) {
    tracks = action.tracks;
    pageLoaded = 1;
  }

  return {
    ...state,
    tracks,
    pageLoaded,
    url: action.alias,
    activeId: action.id,
    isLoading: false,
    isLoadMore: false
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.START_FETCHING_TRACKS:
      return { ...state, isLoading: true };
    case TYPES.FETCH_TRACKS_SUCCESS:
      return fetchTrackSuccess(state, action);
    case TYPES.FETCH_TRACKS_FAILURE:
      return { ...state, isLoading: false };
    case TYPES.FETCH_MORE_TRACKS_SUCCESS:
      return { ...state, isLoadMore: false, isLoadMore: false };
    case TYPES.START_FETCHING_MORE_TRACKS:
      return { ...state, isLoadMore: true };
    case TYPES.CLEAR_TRACKS:
      return { ...initialState };

    default:
      return state;
  }
}
