import * as actionTypes from './user-action-types';
import axios from '../../config/axios';

export const fetchUserSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USER,
    users: users
  };
};

export const fetchUser = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('admin/users');
      dispatch(fetchUserSuccess(data.users));
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };
};
