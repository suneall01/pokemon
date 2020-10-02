import { combineReducers } from 'redux';
import Constants from '../constants';

export const fetchedPokemons = (state = [], action) =>
  action.type === Constants.FETCHED_POKEMONS ? [...state, ...action.payload] : state;

export const pokemon = (state = {}, action) =>
  action.type === Constants.FETCH_POKEMON ? action.payload : state;

export const fetching = (state = false, action) => {
  switch (action.type) {
    case Constants.START_FETCHING:
      return true;
    case Constants.SUCCESS_FETCHING:
      return false;
    case Constants.CANCEL_FETCHING:
      return false;
    default:
      return state;
  }
};

export const filter = (state = '', action) =>
  action.type === Constants.SET_FILTER ? action.payload : state;

export default combineReducers({
  fetching,
  filter,
  pokemon,
  fetchedPokemons,
});
