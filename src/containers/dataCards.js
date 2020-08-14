import { connect } from 'react-redux';

import DataCards from '../components/DataCards/DataCards';
import { doDataLoading } from '../actions/data';

const mapStateToProps = ({ dataState }) => ({
  isLoading: dataState.isLoading,
  data: dataState.data,
  isError: dataState.isError,
})

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doDataLoading()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DataCards);
