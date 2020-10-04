import { connect } from 'react-redux';
import Pokemon from '../ui/Pokemon';

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleClick(name) {
//       dispatch(getPokemon(name));
//     },
//   };
// };

export default connect(mapStateToProps)(Pokemon);
