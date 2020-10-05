import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import '../../stylesheets/pokemon.scss';
import Abilites from './features/Abilities';
import GameIndices from './features/GameIndices';
import Moves from './features/Moves';
import Stats from './features/Stats';
import Types from './features/Types';

class Pokemon extends Component {
  constructor(props) {
    super(props);

    const { name = '', pokemon = [] } = props;
    this.pokemon = pokemon;
    this.state = {
      abilities: [],
      baseExperiences: 0,
      gameIndices: [],
      height: 0,
      id: 0,
      moves: [],
      name: '',
      sprites: '',
      stats: [],
      types: [],
      weight: 0,
      activeTab: 2,
    };

    this.titles = [
      { id: 'abilities', name: 'Abilities' },
      { id: 'game-indices', name: 'Game Indices' },
      { id: 'moves', name: 'Moves' },
      { id: 'stats', name: 'Stats' },
      { id: 'types', name: 'Types' },
    ];
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.pokemon != state.pokemon) {
  //     return { id: props.pokemon.id };
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState) {
    const { pokemon } = this.props;
    if (prevProps.pokemon !== pokemon) {
      this.setValues(pokemon);
    }
  }

  setValues = (pokemon) => {
    this.setState({
      abilities: pokemon.abilities,
      baseExperiences: pokemon.base_experience,
      gameIndices: pokemon.game_indices,
      height: pokemon.height,
      id: pokemon.id,
      moves: pokemon.moves,
      stats: pokemon.stats,
      types: pokemon.types,
      weight: pokemon.weight,
      sprites: pokemon.sprites.other.dream_world.front_default,
    });
  };

  handleClick = (index) => {
    // this.setState({ activeTab: index });
  };

  render() {
    const { name } = this.props;
    const {
      abilities,
      baseExperiences,
      gameIndices,
      height,
      id,
      moves,
      stats,
      types,
      weight,
      sprites,
      activeTab,
    } = this.state;
    console.log(sprites);
    return (
      <div className="container-fluid">
        {/* <Header title={name} filter="invisible" /> */}
        <div className="card m-2">
          <div className="card-body m-2">
            <div className="row featurette pb-4">
              <div className="col-md-7 order-md-2 table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th colSpan="2">Profile</th>
                    </tr>
                  </thead>
                  <tr>
                    <th>ID</th>
                    <td>#{id}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Base Experience</th>
                    <td>{baseExperiences}</td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>{height}</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>{weight}</td>
                  </tr>
                </table>
              </div>
              <div className="col-md-5 order-md-1">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto"
                  width="500"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: 500x500"
                >
                  <rect width="100%" height="100%" fill="#55595c" />
                  <image width="100%" height="100%" href={sprites} alt="img1" x="0" y="0" />
                </svg>
              </div>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {this.titles.map((item, index) => (
                <li key={index} className="nav-item" role="presentation">
                  <a
                    className={`nav-link${index == activeTab ? ' active' : ''}`}
                    id={`#${item.id}-tab`}
                    data-toggle="tab"
                    href={`#${item.id}`}
                    role="tab"
                    aria-controls={`${item.id}`}
                    aria-selected="true"
                    onClick={this.handleClick(index)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              {this.titles.map((item, index) => (
                <div
                  key={index}
                  className={`tab-pane${activeTab == index ? ' active' : ''}`}
                  id={item.id}
                  role="tabpanel"
                  aria-labelledby={`${item.id}-tab`}
                >
                  {
                    {
                      0: <Abilites abilities={abilities} />,
                      1: <GameIndices gameIndices={gameIndices} />,
                      2: <Moves moves={moves} />,
                      3: <Stats stats={stats} />,
                      4: <Types types={types} />,
                    }[index]
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Pokemon;
