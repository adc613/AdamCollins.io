import { combineReducers } from 'redux';
import storyPageReducer from './storyPageReducer';
import openClose from  './openCloseReducer';


export default combineReducers({
  story: storyPageReducer,
  openClose: openClose,
});
