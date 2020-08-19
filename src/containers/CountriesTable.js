import { connect } from 'react-redux';

import CountriesTable from '../components/CountriesTable/CountriesTable';
import { doCountriesDataLoading, doCountriesDataSort } from '../actions/countriesData';
import { doGlobalDataSuccess } from '../actions/globalData';
import { getData } from '../selectors/data';

const mapStateToProps = ({ countriesDataState }) => ({
  data: getData(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doCountriesDataLoading()),
  onSortData: (key, sort) => dispatch(doCountriesDataSort(key, sort)),
  // loadingCountryData: country => dispatch(doGlobalDataSuccess(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
