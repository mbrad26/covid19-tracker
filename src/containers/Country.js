import { connect } from 'react-redux';

import Country from '../components/CountriesTable/Country';
import { doDataSuccess } from '../actions/globalData.js';
import { doUpdateEndPoint, doHistoricalCountryDataLoading } from '../actions/historicalData';

// const mapStateToProps = ({}) => ({
//
// });

const mapDispatchToProps = dispatch => ({
  dataSuccess: data => dispatch(doDataSuccess(data)),
  updateEndPoint: endPoint => dispatch(doUpdateEndPoint(endPoint)),
  historicalCountryDataLoading: () => dispatch(doHistoricalCountryDataLoading()),
});

export default connect(null, mapDispatchToProps)(Country);
