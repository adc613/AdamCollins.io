import {
  ACTIVE_PAGE
} from '../actions/metaActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  activePage: ''
});

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ACTIVE_PAGE:
      return activePage(state, action.payload);
    default:
      return state;

  }

}


function activePage(state, payload) {

  let activePage = payload.activePage;

  return state.set('activePage', activePage);

}
