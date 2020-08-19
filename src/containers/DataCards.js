import { connect } from 'react-redux';

import {
  getIsLoadingStatus,
  getData,
  getIsErrorStatus,
} from '../selectors/data';
import { doHistoricalDataLoading } from '../actions/historicalData.js';
import DataCards from '../components/DataCards/DataCards';
import { doDataLoading } from '../actions/globalData';

const mapStateToProps = ({ globalDataState, historicalDataState }) => ({
  isLoading: getIsLoadingStatus(globalDataState),
  globalData: getData(globalDataState),
  historicalData: getData(historicalDataState),
  isError: getIsErrorStatus(globalDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingGlobalData: () => dispatch(doDataLoading()),
  loadingHistoricalData: () => dispatch(doHistoricalDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataCards);
