/* istanbul ignore file */
import { connect } from 'react-redux';

import PopupComponent from '../components/Map/PopupComponent';
import { doSetInactive } from '../actions/countryData';
import { getActiveCountry } from '../selectors/data';

const mapStateToProps = ({ countryDataState }) => ({
  activeCountry: getActiveCountry(countryDataState),
});

const mapDispatchToProps = dispatch => ({
  onSetInactive: () => dispatch(doSetInactive()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupComponent);
