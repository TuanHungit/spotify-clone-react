import * as TYPES from '../contanst/action-types';
export const startFading = () => {
  return { type: TYPES.START_FADING };
};
export const stopFading = () => {
  return { type: TYPES.STOP_FADING };
};
export const setPlaying = isPlaying => {
  return { type: TYPES.SET_PLAYING, isPlaying };
};

export const setShowAnalyzer = isShowing => {
  return { type: TYPES.SET_SHOW_ANALYZER, isShowing };
};
export const setColor = color => {
  return { type: TYPES.SET_COLOR, color };
};
export const clearColor = () => {
  return { type: TYPES.CLEAR_COLOR };
};
