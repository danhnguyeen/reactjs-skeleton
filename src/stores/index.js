import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userState', 'companyState']
};

const persistedReducer = persistReducer(persistConfig, reducers);

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

const store = createStore(
  persistedReducer, 
  {}, 
  composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
);

persistStore(store);

export default store;
