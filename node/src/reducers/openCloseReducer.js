import {
  TOGGLE_OPEN,
  INITIALIZE,
} from '../actions/openCloseActions';
import { fromJS } from 'immutable';

const initialState = fromJS({});

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case TOGGLE_OPEN:
      return toggleOpen(state, action.payload);
    case INITIALIZE:
      return initialize(state, action.payload);
    default:
      return state;
  }

}

function toggleOpen(state, payload) {
  let id = payload.id;
  let isOpen = !state.get([id, 'isOpen']);

  return state.setIn([id, 'isOpen'], isOpen);
}

function initialize(state, payload) {

  let id = payload.id;
  let height = payload.height;

  return state.setIn([id, 'isOpen'], false)
              .setIn([id, 'maxHeight'], height);

}
