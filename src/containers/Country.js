import { connect } from 'react-redux';

import Country from '../components/CountriesTable/Country';
import { doDataSuccess } from '../actions/globalData.js';
import {
  doUpdateEndPoint,
  doHistoricalCountryDataLoading
} from '../actions/historicalData';
import { doZoomOnCountry } from '../actions/mapboxData';

// const mapStateToProps = ({}) => ({
//
// });

const mapDispatchToProps = dispatch => ({
  dataSuccess: data => dispatch(doDataSuccess(data)),
  updateEndPoint: endPoint => dispatch(doUpdateEndPoint(endPoint)),
  historicalCountryDataLoading: () => dispatch(doHistoricalCountryDataLoading()),
  zoomOnCountry: country => dispatch(doZoomOnCountry(country)),
});

export default connect(null, mapDispatchToProps)(Country);
