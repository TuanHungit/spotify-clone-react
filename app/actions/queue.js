import * as TYPES from '../contanst/action-types';

export const addSongToQueue = (songData, tracks) => {
  let queue;
  if (!songData) {
    queue = tracks;
  } else {
    const index = tracks.map(el => el.id).indexOf(songData.id);
    queue = tracks.slice(index + 1);
  }
  return {
    type: TYPES.ADD_SONG_TO_QUEUE,
    queue
  };
};
