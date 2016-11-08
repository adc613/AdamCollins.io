export const UPDATE_COUNTDOWN = 'LANDING_PAGE@UPDATE_COUNTDOWN';
let commencementDate = new Date();

let year = 2017;
let month = 5;
let day = 21;
let hour = 11;
let minute = 0;
let second = 0;

commencementDate.setFullYear(year, month - 1, day);
commencementDate.setHours(hour);
commencementDate.setMinutes(minute);
commencementDate.setSeconds(second);


export function updateCountdownAction(months, days, hours, minutes, seconds) {

  return {
    type: UPDATE_COUNTDOWN,
    payload: {
      months,
      days,
      hours,
      minutes,
      seconds,
    }
  };

}

export function updateCountdown() {

  let date = new Date();
  let time = Math.floor(commencementDate.getTime() / 1000 - date.getTime() / 1000);

  let second = time % 60;
  time = Math.floor( time / 60 );
  let minute = time % 60;
  time = Math.floor(time / 60);
  let hour =  time % 24;

  let month = commencementDate.getFullYear();
  month = month - date.getFullYear();
  month = month * 12;
  month = month - date.getMonth() + commencementDate.getMonth();
  month = Math.max(month, 0);

  let days = month > 0 ? commencementDate.getDate() : commencementDate.getDate() - date.getDate();

  return (dispatch, getState) => {

    return dispatch(updateCountdownAction(month, day, hour, minute, second));

  };

}
