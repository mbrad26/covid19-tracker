import { connect } from 'react-redux';

import MarkerComponent from '../components/Map/MarkerComponent';
import { doSetActive } from '../actions/countryData';
import { getData, getActiveCountry } from '../selectors/data';

const mapStateToProps = ({ countriesDataState, countryDataState }) => ({
  countries: getData(countriesDataState),
  activeCountry: getActiveCountry(countryDataState),
});

const mapDispatchToProps = dispatch => ({
  onSetActive: data => dispatch(doSetActive(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkerComponent);
