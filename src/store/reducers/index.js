import { combineReducers } from 'redux';
import { spotReducer } from './spotReducer';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
  spots: spotReducer,
  userLocation: locationReducer
});

export default rootReducer;
