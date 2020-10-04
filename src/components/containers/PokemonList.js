import { connect } from 'react-redux';
import PokemonList from '../ui/PokemonList';
import { getPokemon, getFilterData } from '../../actions';

const mapStateToProps = (state) => ({
  allPokemons: state.fetchedPokemons,
  gender:state.gender,
  region: state.region,
  habitat:state.habitat,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (name) => dispatch(getPokemon(name)),
    onFilterChange: (data) => dispatch(getFilterData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
