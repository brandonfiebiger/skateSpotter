import { combineReducers } from 'redux';
import spotReducer from './spotReducer';

const rootReducer = combineReducers({
  spots: spotReducer
});

export default rootReducer;
