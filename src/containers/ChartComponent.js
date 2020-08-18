import { connect } from 'react-redux';
import { getData } from '../selectors/data';

import ChartComponent from '../components/Chart/ChartComponent';
import { doHistoricalDataLoading } from '../actions/historicalData.js';

const mapStateToProps = ({ historicalDataState }) => ({
  data: getData(historicalDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doHistoricalDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartComponent);
