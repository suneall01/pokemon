/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

// consoleMessages middleware
const consoleMessages = (store) => (next) => (action) => {
  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('no of Pokemons ', store.getState().fetchedPokemons.length);

  const result = next(action);

  const { fetchedPokemons, fetching, filter, pokemon } = store.getState();
  console.log(`allPokemons: ${fetchedPokemons.length}`);
  console.log(`Pokemon: ${JSON.stringify(pokemon)}`);
  console.log(`fetching: ${fetching}`);
  console.log(`filter: ${filter}`);
  console.groupEnd();

  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
};
