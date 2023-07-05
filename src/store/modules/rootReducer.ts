import { combineReducers } from 'redux';
import auth from './auth/reducer';
import loading from './load/reducer';

export default combineReducers({
  auth,
  loading,
});
