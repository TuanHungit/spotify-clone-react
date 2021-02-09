import * as TYPES from '../contanst/action-types';

export const updateLyric = (lyric1, lyric2) => {
  return {
    type: TYPES.UPDATE_LYRIC,
    lyric1,
    lyric2
  };
};

export const updatePlayedPercent = percent => {
  return {
    type: TYPES.UPDATE_PLAYED_PERCENT
  };
};

export const updateLyricsPercent = (...percentages) => {
  const payload = {};

  percentages.forEach((value, index) => {
    if (value !== null) {
      payload[`per${index + 1}`] = value;
    }
  });

  return {
    type: types.UPDATE_LYRIC_PERCENT,
    payload
  };
};
