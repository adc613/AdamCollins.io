import {
  UPDATE_COUNTDOWN
} from '../actions/landingPageActions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  months: 13,
  hours: 13,
  days: 13,
  minutes: 13,
  seconds: 13,
  active: true,
});


export default function reducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_COUNTDOWN:
      return updateCountdown(state, action.payload);
    default:
      return state;
  }

}


function updateCountdown(state, payload) {

  let months = payload.months;
  let hours = payload.hours;
  let days = payload.days;
  let minutes = payload.minutes;
  let seconds = payload.seconds;

  return state.set('months', months)
              .set('hours', hours)
              .set('days', days)
              .set('minutes', minutes)
              .set('seconds', seconds);

}
