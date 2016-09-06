const TOGGLE_OPEN = 'STORY @ TOGGLE_OPEN';

export function toggleOpenAction(key) {

  return {
    type: TOGGLE_OPEN,
    payload: {
      key,
    }
  };

}

export function toggleOpen(key) {

  return (dispatch, getState) => {

    dispatch(toggleOpenAction(key));

  };

}
