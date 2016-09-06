import {
  TOGGLE_OPEN
} from '../actions/storyPageActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  clkTech: {
    isOpen: false,
  },
  rentIQ: {
    isOpen: false,
  },
  koalah: {
    isOpen: false,
  },
});

export default function reducer(state = initialState, action) {

  switch (action.type) {
    default:
      return state;
  }

}

function toggleOpen(state, payload) {
  let key = payload.key;
  let isOpen = !state.getIn([key, 'isOpen']);

  return state.setIn([key, 'isOpen'], isOpen);
}
