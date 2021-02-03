import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tracksReducer from './tracks-reducer';
import uiReducer from './ui-reducer';
import songReducer from './song-reducer';
export default combineReducers({
  tracksState: tracksReducer,
  routing: routerReducer,
  uiState: uiReducer,
  songState: songReducer
});
