import { SET_HIDDEN, SET_VISIBLE, SET_QUERY } from './searchBarActions' 

const initialState = {
    status: 'visible',
    query: '',
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
      default:
        return state;
    }
};