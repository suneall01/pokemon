import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../../stylesheets/pokemon.scss';
import PokemonBanner from './PokemonBanner';

const Pokemon = ({ id, name }) => {
  return (
    <div className="container">
      <Header title={name} filter="invisible" />
      {/* <PokemonBanner id={id} /> */}
    </div>
  );
};

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default Pokemon;
