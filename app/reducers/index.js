import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tracksReducer from './tracks-reducer';
export default combineReducers({
  tracksState: tracksReducer,
  routing: routerReducer
});
