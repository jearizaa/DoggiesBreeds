import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer/searchBarReducer'
import catalogueReducer from './catalogueReducer/catalogueReducer'

const rootReducer = combineReducers({  
  searchBarReducer,
  catalogueReducer,
});

export default rootReducer;
