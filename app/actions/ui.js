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
