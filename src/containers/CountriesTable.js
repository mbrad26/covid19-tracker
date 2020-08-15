import { connect } from 'react-redux';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';

import CountriesTable from '../components/CountriesTable/CountriesTable';
import { doDataLoading } from '../actions/data.js';

const mapStateToProps = ({ countriesDataState }) => ({
  isLoading: getIsLoadingStatus(countriesDataState),
  data: getData(countriesDataState),
  isError: getIsErrorStatus(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doDataLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
