import * as TYPES from '../contanst/action-types';
const initialState = {
  isFading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.START_FADING:
      return { ...state, isFading: true };
    case TYPES.STOP_FADING:
      return { ...state, isFading: false };
    default:
      return state;
  }
};
