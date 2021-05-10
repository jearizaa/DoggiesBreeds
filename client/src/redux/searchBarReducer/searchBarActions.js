export const SET_HIDDEN = 'SET_HIDDEN';
export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_QUERY = 'SET_QUERY';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_FILTER = 'SET_FILTER';

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
  return function (dispatch) {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
  };
}

export function setSearch(search) {
  return function (dispatch) {
    dispatch({
      type: SET_SEARCH,
      payload: search,
    });
  };
}

export function setFilter(filter) {
  return function (dispatch) {
    dispatch({
      type: SET_FILTER,
      payload: filter,
    });
  };
}