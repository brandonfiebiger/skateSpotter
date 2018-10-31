import { combineReducers } from 'redux';
import { spotReducer } from './spotReducer';
import { locationReducer } from './locationReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  spots: spotReducer,
  userLocation: locationReducer,
  currentUser: loginReducer
});

export default rootReducer;
