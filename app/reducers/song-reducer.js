import * as TYPES from '../contanst/action-types';

const initialState = {
  data: null,
  isFetching: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_FETCH_SONG:
      return { ...state, isFetching: true, isPlaying: false };
    case TYPES.FETCH_SONG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        isPlaying: true,
        error: false
      };
    case TYPES.FETCH_SONG_FAILURE:
      return { ...state, isFetching: false, isPlaying: false, error: true };
    default:
      return state;
  }
};
