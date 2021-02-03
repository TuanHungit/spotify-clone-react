import axios from 'axios';

import * as TYPES from '../contanst/action-types';

export function fetchSong(id, name) {
  return dispacth => {
    dispacth({ type: TYPES.START_FETCH_SONG });

    axios
      .get(`/api/media/song?name=${name}&id=${id}`)
      .then(({ data }) => {
        data.cover = data.artist.cover;
        delete data.artist;
        dispacth({ type: TYPES.FETCH_SONG_SUCCESS, data });
      })
      .then(err => {
        console.log(err);
        dispacth({ type: TYPES.FETCH_SONG_FAILURE });
      });
  };
}
