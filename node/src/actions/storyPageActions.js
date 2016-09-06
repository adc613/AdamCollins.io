const TEST_ACTION = 'TEST_ACTION';

export function testAction(text) {
  return {
    type: TEST_ACTION,
    payload: {
      text,
    }
  };
}

export function test(text) {

  return (dispatch, getState) => {
    let func = () => {
      dispatch(testAction(text));
    };
    setTimeout( func, 2000);
  };

}
