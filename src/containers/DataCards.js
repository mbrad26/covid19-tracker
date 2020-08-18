import { connect } from 'react-redux';

import DataCards from '../components/DataCards/DataCards';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';
import { doGlobalDataLoading } from '../actions/globalData';
import { doHistoricalDataLoading } from '../actions/historicalData.js';

const mapStateToProps = ({ globalDataState, historicalDataState }) => ({
  isLoading: getIsLoadingStatus(globalDataState),
  globalData: getData(globalDataState),
  historicalData: getData(historicalDataState),
  isError: getIsErrorStatus(globalDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingGlobalData: () => dispatch(doGlobalDataLoading()),
  loadingHistoricalData: endPoint => dispatch(doHistoricalDataLoading(endPoint)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataCards);
