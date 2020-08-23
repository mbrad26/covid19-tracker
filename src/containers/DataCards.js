import { connect } from 'react-redux';

import DataCards from '../components/DataCards/DataCards';
import { doDataLoading } from '../actions/globalData';
import { doHistoricalDataLoading } from '../actions/historicalData';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';

const mapStateToProps = ({ globalDataState, historicalDataState }) => ({
  globalData: getData(globalDataState),
  isError: getIsErrorStatus(globalDataState),
  historicalData: getData(historicalDataState),
  isLoading: getIsLoadingStatus(globalDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingGlobalData: () => dispatch(doDataLoading()),
  loadingHistoricalData: () => dispatch(doHistoricalDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataCards);
