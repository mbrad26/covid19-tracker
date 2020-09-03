/* istanbul ignore file */
import { connect } from 'react-redux';

import { getData} from '../selectors/data';
import { doSetActive } from '../actions/countryData';
import MarkerComponent from '../components/Map/MarkerComponent';

const mapStateToProps = ({ countriesDataState, countryDataState }) => ({
  countries: getData(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  onSetActive: data => dispatch(doSetActive(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkerComponent);
