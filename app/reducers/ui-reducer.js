import * as TYPES from '../contanst/action-types';
const initialState = {
  isFading: false,
  isPlaying: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_FADING:
      return { ...state, isFading: true };
    case TYPES.STOP_FADING:
      return { ...state, isFading: false };
    case TYPES.SET_PLAYING:
      return {
        ...state,
        isPlaying: action.isPlaying
      };
    default:
      return state;
  }
};
