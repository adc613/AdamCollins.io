import { combineReducers } from 'redux';
import storyPageReducer from './storyPageReducer';
import openClose from  './openCloseReducer';
import landingPage from  './landingPageReducer';


export default combineReducers({
  story: storyPageReducer,
  openClose: openClose,
  landingPage: landingPage,
});
