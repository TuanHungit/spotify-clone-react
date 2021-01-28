import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tracksReducer from './tracks-reducer';
import uiReducer from './ui-reducer';
export default combineReducers({
  tracksState: tracksReducer,
  routing: routerReducer,
  uiState: uiReducer
});
