import { connect } from 'react-redux';

import Nhs from '../components/Nhs/Nhs';
import { doNHSLoading } from '../actions/nhsData';
import { getNhsData, getIsLoadingStatus, getIsErrorStatus } from '../selectors/data';

const mapStateToProps = ({ nhsDataState }) => ({
  nhsData: getNhsData(nhsDataState),
  isError: getIsErrorStatus(nhsDataState),
  isLoading: getIsLoadingStatus(nhsDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingNhsData: () => dispatch(doNHSLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nhs);
