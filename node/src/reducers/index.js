import { combineReducers } from 'redux';
import storyPageReducer from './storyPageReducer';


export default combineReducers({
  story: storyPageReducer
});
