import * as TYPES from '../contanst/action-types';

export const addSongToQueue = (songData, tracks) => {
  const index = tracks.map(el => el.id).indexOf(songData.id);
  const queue = tracks.slice(index + 1);
  return {
    type: TYPES.ADD_SONG_TO_QUEUE,
    queue
  };
};
