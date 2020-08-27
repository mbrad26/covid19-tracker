import { connect } from 'react-redux';

import CountriesTable from '../components/CountriesTable/CountriesTable';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';
import { doCountriesDataLoading, doCountriesDataSort } from '../actions/countriesData';

const mapStateToProps = ({ countriesDataState }) => ({
  data: getData(countriesDataState),
  isError: getIsErrorStatus(countriesDataState),
  isLoading: getIsLoadingStatus(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doCountriesDataLoading()),
  onSortData: (key, sort) => dispatch(doCountriesDataSort(key, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
