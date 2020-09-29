import { connect } from 'react-redux';
import pokemon from '../ui/Pokemon';

const mapStateToProps = (name) => name;

export default connect(mapStateToProps)(pokemon);
