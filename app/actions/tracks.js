import axios from 'axios';
import * as TYPES from '../contanst/action-types';
import * as ENDPOINT from '../contanst/endpoint';
import { startFading, stopFading } from './ui';

let cachedId = 'ZWZB96AB';

export function fetchTracks(page, id = 'ZWZB96AB') {
  return dispatch => {
    dispatch({ type: TYPES.START_FETCHING_TRACKS });
    if (id !== cachedId) {
      dispatch(startFading());
      cachedId = id;
    }

    axios
      .get(
        `${ENDPOINT.MEDIA_ENDPOINT}/top-100/${id}${page ? `?page=${page}` : ''}`
      )
      .then(({ data }) => {
        dispatch({
          type: TYPES.FETCH_TRACKS_SUCCESS,
          tracks: data.data.items,
          page,
          id
        });
        dispatch(stopFading());
      })
      .catch(() => {
        dispatch({ type: TYPES.FETCH_TRACKS_FAILURE });
        if (id !== cachedId) {
          dispatch(stopFading());
        }
      });
  };
}