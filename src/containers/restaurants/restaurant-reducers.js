import * as actionTypes from './restaurant-action-types';
import { updatedObject } from '../../utility';

const initalState = {
  restaurants: []
};

const fetchRestaurant = (state, action) => updatedObject(state, { restaurants: action.restaurants });

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESTAURANT: return fetchRestaurant(state, action);
    default: return state;
  }
};

export default reducer;
