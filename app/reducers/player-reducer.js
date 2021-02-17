import * as TYPES from '../contanst/action-types';

const initialState = {
  playedPercent: undefined,
  lyric1: [],
  lyric2: [],
  per1: 0,
  per2: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.UPDATE_LYRIC:
      return {
        ...state,
        lyric1: action.lyric1,
        lyric2: action.lyric2
      };

    case TYPES.UPDATE_LYRIC_PERCENT:
      return Object.assign({}, state, action.payload);

    case TYPES.UPDATE_PLAYED_PERCENT:
      return { ...state, playedPercent: action.playedPercent };

    default:
      return state;
  }
}
