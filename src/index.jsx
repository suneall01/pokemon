/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getGender, getHabitat, getPokemons, getRegion } from './actions';
import storeFactory from './store';
import routes from './routes';

const store = storeFactory();
console.log('initial state', store.getState());
store.dispatch(getPokemons());
store.dispatch(getHabitat());
store.dispatch(getRegion());
store.dispatch(getGender());
// store.dispatch(getPokemon());
window.store = store;

render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
