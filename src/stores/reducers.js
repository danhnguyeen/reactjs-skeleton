import { combineReducers } from 'redux';
import { userReducers } from '../containers/users';
import { authReducers } from '../containers/auth';
import { companyReducers } from '../containers/companies';
import { restaurantReducers } from '../containers/restaurants';

const reducers = combineReducers({
  restaurantState: restaurantReducers,
  authState: authReducers,
  userState: userReducers,
  companyState: companyReducers
});

export default reducers;