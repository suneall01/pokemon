/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import Header from './ui/Header';
import PokemonList from './containers/PokemonList';
import '../stylesheets/index.scss';
import { Sidebar } from './ui/Sidebar';

export const App = () => {
  const [text, setText] = useState('');

  const onTextChanged = (e) => {
    const text = e.target.value;
    setText(text);
  };

  return (
    <div className="App">
      <Header title="Pokemons" onTextChanged={onTextChanged} />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-0">
            <PokemonList text={text} />
          </main>
        </div>
      </div>
    </div>
  );
};

export const Whoops404 = ({ location }) => (
  <div className="whoops-404">
    <h1>Whoops, route not found</h1>
    <p>
      Cannot find content for
      {location.pathname}
    </p>
  </div>
);

Whoops404.propTypes = {
  location: PropTypes.string.isRequired,
};
