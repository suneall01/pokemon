/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../stylesheets/pokemonlist.scss';
import Carousel from './Carousel';
import DisplayItemNumber from './DisplayItemNumber';
import Pagination from './Pagination';
import PokemonView from './PokemonView';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFetchedPokemons: Object.assign([], this.props.allPokemons),
      region: Object.assign([], this.props.region),
      habitat: Object.assign([], this.props.habitat),
      gender: Object.assign([], this.props.gender),
      currentPokemons: [],
      currentPage: 1,
      totalPages: null,
      pageLimit: 20,
    };
  }

  static getDerivedStateFromProps(props, state) {
    
    if (props.text.length == 0 && props.allPokemons.length != state.allFetchedPokemons.length) {
      console.log("all");
      return {
        allFetchedPokemons: [...props.allPokemons],
      };
    }
    if (props.text.length > 0) {
      console.log("text");
      return {
        allFetchedPokemons: [...props.allPokemons],
        currentPokemons: [...props.allPokemons],
      };
    }
    if (props.gender.length != state.gender.length) {
      return {
        gender: [...props.gender],
        region: [...props.region],
        habitat: [...props.habitat],
      };
    }
    return null;
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
  };

  render() {
    const {
      allFetchedPokemons,
      currentPokemons,
      pageLimit,
      currentPage,
      region,
      gender,
      habitat,
    } = this.state;
    const { handleClick = (f) => f, onFilterChange = (f) => f } = this.props;

    const totalPokemons = allFetchedPokemons.length;
    if (totalPokemons === 0) return null;
    return (
      <div>
        <Carousel />
        <div className="px-5">
          <div className="row justify-content-between">
            <div className="col-md-5 align-self-center">
              <a className="nav-link px-2" data-toggle="collapse" href="#collapseableform">
                Refine
              </a>
            </div>

            <DisplayItemNumber pageLimit={pageLimit} onLimitChanged={this.onLimitChanged} />
          </div>
          <Filters
            gender={gender}
            region={region}
            habitat={habitat}
            onFilterClick={onFilterChange}
          />
          <div className="row mb-2 justify-content-between">
            {currentPokemons.map((item) => (
              <PokemonView key={item.id} {...item} onItemClick={handleClick} />
            ))}
          </div>
          <Pagination
            totalRecords={totalPokemons}
            pageLimit={pageLimit}
            currentPage={currentPage}
            onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    );
  }
}

export default PokemonList;
