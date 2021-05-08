export const SET_HIDDEN = 'SET_HIDDEN';
export const SET_VISIBLE = 'SET_VISIBLE';

export function setHidden() {
  return function (dispatch) {
    dispatch({
      type: SET_HIDDEN,
    });
  };
}

export function setVisible() {
  return function (dispatch) {
    dispatch({
      type: SET_VISIBLE,
    });
  };
}