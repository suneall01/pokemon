import { combineReducers } from 'redux';
import Constants from '../constants';

export const fetchedPokemons = (state = [], action) => {
  switch (action.type) {
    case Constants.FETCHED_POKEMONS:
      return [...state, ...action.payload];
    case Constants.CLEAR_POKEMONS:
      return [];
    case Constants.FILTER_POKEMONS:
      const re = new RegExp(action.payload);
      return state.filter((item) => re.exec(item.name) && re.exec(item.name).index == 0);
    default:
      return state;
  }
};

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

export const habitat = (state = [], action) =>
  action.type === Constants.HABITAT ? [...state, ...action.payload] : state;

export const region = (state = [], action) =>
  action.type === Constants.REGION ? [...state, ...action.payload] : state;

export const gender = (state = [], action) =>
  action.type === Constants.GENDER ? [...state, ...action.payload] : state;

export default combineReducers({
  fetching,
  habitat,
  gender,
  region,
  pokemon,
  fetchedPokemons,
});
