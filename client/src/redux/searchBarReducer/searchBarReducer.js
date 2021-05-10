import { SET_HIDDEN, SET_VISIBLE, SET_QUERY, SET_SEARCH, SET_FILTER } from './searchBarActions' 

const initialState = {
    status: 'visible',
    query: '',
    search: false,
    filter: 'All',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case SET_HIDDEN: {
        return {
          ...state,
          status: 'hidden',
        };
      }
      case SET_VISIBLE: {
        return {
            ...state,
            status: 'visible',
          };
      }
      case SET_QUERY: {
        return {
            ...state,
            query: action.payload,
          };
      }
      case SET_SEARCH: {
        return {
            ...state,
            search: action.payload,
          };
      }
      case SET_FILTER: {
        return {
            ...state,
            filter: action.payload,
          };
      }
      default:
        return state;
    }
};