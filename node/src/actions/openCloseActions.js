export const TOGGLE_OPEN = 'OPEN_CLOSE @ TOGGLE_OPEN';
export const INITIALIZE = 'OPEN_CLOSE @ INITIALIZE';

export function toggleOpenAction(id) {

  return {
    type: TOGGLE_OPEN,
    paylaod: {
      id,
    }
  };

}

export function toggleOpen(id) {

  return (dispatch, getState) => {
    dispatch(toggleOpenAction(id));
  };

}

export function initializeAction(id, height) {

  return {
    type: INITIALIZE,
    payload: {
      id,
      height,
    }
  };

}

export function initialize(id, height) {

  return (dispatch, getState) => {
    dispatch(initializeAction(id, height));
  };

}
