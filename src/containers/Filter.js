/* istanbul ignore file */
import { connect } from 'react-redux';

import Filter from '../components/CountriesTable/Filter';
import { getData } from '../selectors/data';
import { doSetInactive } from '../actions/countryData';
import { doReset, doZoomOnCountry } from '../actions/mapboxData';
import { doDataLoading, doDataSuccess } from '../actions/globalData';
import {
  doUpdateEndPoint,
  doHistoricalDataLoading,
  doHistoricalCountryDataLoading,
} from '../actions/historicalData';

const mapStateToProps = ({ globalDataState }) => ({
  globalData: getData(globalDataState),
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(doReset()),
  dataLoading: () => dispatch(doDataLoading()),
  setInactive: () => dispatch(doSetInactive()),
  dataSuccess: data => dispatch(doDataSuccess(data)),
  zoomOnCountry: country => dispatch(doZoomOnCountry(country)),
  updateEndPoint: endPoint => dispatch(doUpdateEndPoint(endPoint)),
  historicalDataLoading: () => dispatch(doHistoricalDataLoading()),
  historicalCountryDataLoading: () => dispatch(doHistoricalCountryDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
