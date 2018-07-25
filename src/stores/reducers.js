import { combineReducers } from 'redux';
import { userReducers } from '../containers/Users';
import { companyReducers } from '../containers/Companies';

const reducers = combineReducers({
  userState: userReducers,
  companyState: companyReducers
});

export default reducers;