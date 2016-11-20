import { combineReducers } from 'redux';
import storyPageReducer from './storyPageReducer';
import openClose from  './openCloseReducer';
import landingPage from  './landingPageReducer';
import meta from './metaReducer';


export default combineReducers({
  story: storyPageReducer,
  openClose: openClose,
  landingPage: landingPage,
  meta: meta,
});
