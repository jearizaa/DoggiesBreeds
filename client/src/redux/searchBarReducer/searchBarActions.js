export const SET_HIDDEN = 'SET_HIDDEN';
export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_QUERY = 'SET_QUERY';

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

export function setQuery(query) {
  console.log(query)
  return function (dispatch) {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
  };
}