import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer/searchBarReducer'

const rootReducer = combineReducers({  
  searchBarReducer,
});

export default rootReducer;
