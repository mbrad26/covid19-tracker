import { connect } from 'react-redux';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data.js';

import GlobalDataCards from '../components/GlobalDataCards/GlobalDataCards';
import { doDataLoading } from '../actions/data';

const mapStateToProps = ({ globalDataState }) => ({
  isLoading: getIsLoadingStatus(globalDataState),
  data: getData(globalDataState),
  isError: getIsErrorStatus(globalDataState),
})

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doDataLoading()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalDataCards);
