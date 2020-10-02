/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../stylesheets/pokemonlist.scss';
import Carousel from './Carousel';
import DisplayItemNumber from './DisplayItemNumber';
import Paginations from './Pagination';
import PokemonView from './PokemonView';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFetchedPokemons: Object.assign([], this.props.allPokemons),
      currentPokemons: [],
      currentPage: 1,
      totalPages: null,
      pageLimit: 20,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.allPokemons.length < nextProps.allPokemons.length) {
      this.setState({ allFetchedPokemons: [...nextProps.allPokemons] });
    }
  }

  onPageChanged = (data) => {
    const { allFetchedPokemons } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPokemons = allFetchedPokemons.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPokemons, totalPages, pageLimit });
  };

  onLimitChanged = (data) => {
    const { allFetchedPokemons, currentPage } = this.state;
    const { pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPokemons = allFetchedPokemons.slice(offset, offset + pageLimit);

    this.setState({ currentPokemons, pageLimit });
  }
  render() {
    const { handleClick = (f) => f } = this.props;
    const { allFetchedPokemons, currentPokemons, pageLimit, currentPage } = this.state;

    const totalPokemons = allFetchedPokemons.length;
    if (totalPokemons === 0) return null;
    return (
      <div>
        <Carousel />
        <DisplayItemNumber
          pageLimit={pageLimit}
          onLimitChanged={this.onLimitChanged}
        />
        <div className="row mb-2">
          {currentPokemons.map((item) => (
            <PokemonView key={item.id} {...item} onItemClick={handleClick} />
          ))}
        </div>
        <Paginations
          totalRecords={totalPokemons}
          pageLimit={pageLimit}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
        />
      </div>
    );
  }
}

export default PokemonList;
