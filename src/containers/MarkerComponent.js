import { connect } from 'react-redux';

import MarkerComponent from '../components/Map/Marker';
import { doSetActive } from '../actions/countryData';
import { getData } from '../selectors/data';

const mapStateToProps = ({ countriesDataState }) => ({
  data: getData(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  onSetActive: data => dispatch(doSetActive(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkerComponent);
