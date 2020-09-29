/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../stylesheets/pokemonlist.scss';
import Carousel from './Carousel';
import DisplayItemNumber from './DisplayItemNumber';
import Pagination from './Paginations';
import PokemonView from './PokemonView';

const PokemonList = ({ pokemons = [] }) => {
  return (
    <div>
      <Carousel />
      <DisplayItemNumber />
      <div className="row mb-2">
        {pokemons.map((item) => (
          <PokemonView key={item.id} {...item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default PokemonList;
