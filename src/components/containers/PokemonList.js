import { connect } from 'react-redux';
import PokemonList from '../ui/PokemonList';
import { getPokemon } from '../../actions';

const mapStateToProps = (state) => ({
  pokemons: state.fetchedPokemons,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(name) {
      dispatch(getPokemon(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
