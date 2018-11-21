import * as actionTypes from './auth-action-types';
import axios from '../../config/axios';

const loginSuccess = (token, user, expiresIn) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    token,
    expiresIn,
    userData: user
  };
};

export const login = (email, password) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('auth/login', { email, password });
      dispatch(loginSuccess(data.access_token, data.user, data.expires_in * 1000));
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

const logoutSuccess = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      await localStorage.clear();
      dispatch(logoutSuccess());
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

const checkAuthSuccess = (token, expiresIn) => {
  return {
    type: actionTypes.AUTH_CHECK_TOKEN,
    token,
    expiresIn
  };
};

export const checkAuth = (token, expiresIn) => {
  return async dispatch => {
    if (!token) {
      dispatch(logout());
    } else {
      if (expiresIn.toString() > new Date().getTime().toString()) {
        dispatch(checkAuthSuccess(token, expiresIn));
      } else {
        dispatch(logout());
      }
    }
  };
};
