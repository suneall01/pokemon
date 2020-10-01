/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../../stylesheets/pokemon.scss';
// import { getPokemon } from '../../actions';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { pokemon } = this.props;
    if (prevProps.pokemon !== pokemon) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        url: pokemon.sprites.other['official-artwork'].front_default,
      });
    }
  }

  render() {
    const { name } = this.props;
    const { url } = this.state;
    return (
      <div className="container">
        <Header title={name} filter="invisible" />
        <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
          <div className="d-flex justify-content-center">
            <img src={url} alt="img1" />
          </div>
        </div>
        <div className="pokemon">
          <h2 className="pokemon-heading">Types</h2>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired,
  // fetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
export default Pokemon;
