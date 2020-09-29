import { connect } from 'react-redux';
import PokemonList from '../ui/PokemonList';

const mapStateToProps = (state) => ({
  pokemons: state.fetched_pokemons,
});

export default connect(mapStateToProps)(PokemonList);
