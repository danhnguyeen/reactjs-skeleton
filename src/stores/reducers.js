import { combineReducers } from 'redux';
import { userReducers } from '../containers/Users';
import { authReducers } from '../containers/Auth';
import { companyReducers } from '../containers/Companies';

const reducers = combineReducers({
  authState: authReducers,
  userState: userReducers,
  companyState: companyReducers
});

export default reducers;