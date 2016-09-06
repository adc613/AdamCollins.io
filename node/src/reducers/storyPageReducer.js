import { fromJS } from 'immutable';

const initialState = fromJS({testText: 'Hello World'});

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'TEST_ACTION':
      return state.set('testText', action.payload.text);
    default:
      return state;
  }

}
