import { connect } from 'react-redux';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';

import GlobalDataCards from '../components/GlobalDataCards/GlobalDataCards';
import { doGlobalDataLoading } from '../actions/globalData';

const mapStateToProps = ({ globalDataState }) => ({
  isLoading: getIsLoadingStatus(globalDataState),
  data: getData(globalDataState),
  isError: getIsErrorStatus(globalDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doGlobalDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalDataCards);
