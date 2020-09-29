/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PokemonView extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="col-md-6">
        <div
          key={id}
          className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">Pokemon</strong>
            <h3 className="mb-0">{name}</h3>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural lead-in to additional
              content.
            </p>
            <Link to={`/pokemon/${name}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg
              className="bd-placeholder-img"
              width="200"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              role="img"
              aria-label="Placeholder: Thumbnail"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
              <image
                href={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt="img1"
                x="0"
                y="0"
                fill="#eceeef"
                dy=".3em"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

PokemonView.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default PokemonView;
