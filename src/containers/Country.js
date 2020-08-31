import { connect } from 'react-redux';

import Country from '../components/CountriesTable/Country';
import { doDataSuccess } from '../actions/globalData';
import { doZoomOnCountry } from '../actions/mapboxData';
import { doUpdateEndPoint, doHistoricalCountryDataLoading } from '../actions/historicalData';
import { doSetActive, doSetInactive } from '../actions/countryData';

const mapDispatchToProps = dispatch => ({
  setInactive: () => dispatch(doSetInactive()),
  dataSuccess: data => dispatch(doDataSuccess(data)),
  setActive: country => dispatch(doSetActive(country)),
  zoomOnCountry: country => dispatch(doZoomOnCountry(country)),
  updateEndPoint: endPoint => dispatch(doUpdateEndPoint(endPoint)),
  historicalCountryDataLoading: () => dispatch(doHistoricalCountryDataLoading()),
});

export default connect(null, mapDispatchToProps)(Country);
