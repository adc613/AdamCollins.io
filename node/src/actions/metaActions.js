export const ACTIVE_PAGE = 'META@ACTIVE_PAGE';


export function activePageAction(activePage) {

  return {
    type: ACTIVE_PAGE,
    payload: {
      activePage,
    }
  };

}


export function activePage(activePage) {

  return (dispatch, getState) => {

    dispatch(activePageAction(activePage));

  };

}

