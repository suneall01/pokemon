import React from 'react';
import PropTypes from 'prop-types';

const PokemonBanner = ({ id }) => {
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="img1"
        />
      </div>
    </div>
  );
};

PokemonBanner.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PokemonBanner;
