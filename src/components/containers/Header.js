import { connect } from 'react-redux';
import { filterPokemons, getPokemons } from '../../actions';
import Constants from '../../constants';
import Header from '../ui/Header';

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text) => {
      if (text.length > 0) {
        dispatch(filterPokemons(text));
      } else {
        dispatch(getPokemons());
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
