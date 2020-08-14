import { connect } from 'react-redux';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data.js';

import DataCards from '../components/DataCards/DataCards';
import { doDataLoading } from '../actions/data';

const mapStateToProps = state => ({
  isLoading: getIsLoadingStatus(state),
  data: getData(state),
  isError: getIsErrorStatus(state),
})

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doDataLoading()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DataCards);
