import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userReducers } from '../containers/Users';
import { companyReducers } from '../containers/Companies';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = store => (
  next => (
    action => {
      console.log('[Middleware]', action);
      const result = next(action);
      console.log('[Middleware result]', store.getState());
      return result;
    }
  )
);
const rootReducer = combineReducers({
  userState: userReducers,
  companyState: companyReducers
});

const store = createStore(
  rootReducer, 
  {}, 
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
);

export default store;
