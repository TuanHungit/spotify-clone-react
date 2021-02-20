import * as TYPES from '../contanst/action-types';
const initialState = {
  color: null,
  isFading: false,
  isPlaying: false,
  isAnalyzerShowing: false
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
    case TYPES.SET_SHOW_ANALYZER:
      return { ...state, isAnalyzerShowing: action.isShowing };
    case TYPES.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    case TYPES.CLEAR_COLOR:
      return { ...state, color: null };
    default:
      return state;
  }
};
