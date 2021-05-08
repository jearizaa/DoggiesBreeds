import { SET_HIDDEN, SET_VISIBLE } from './searchBarActions' 

const initialState = {
    status: 'visible'
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
      default:
        return state;
    }
};