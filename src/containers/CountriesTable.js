import { connect } from 'react-redux';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';

import CountriesTable from '../components/CountriesTable/CountriesTable';
import { doGlobalDataLoading } from '../actions/globalData';

const mapStateToProps = ({ countriesDataState }) => ({
  isLoading: getIsLoadingStatus(countriesDataState),
  data: getData(countriesDataState),
  isError: getIsErrorStatus(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doGlobalDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
