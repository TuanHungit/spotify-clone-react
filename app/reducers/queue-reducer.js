import * as TYPES from '../contanst/action-types';

const initialState = {
  queue: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_SONG_TO_QUEUE:
      return {
        ...state,
        queue: action.queue
      };

    default:
      return state;
  }
}
