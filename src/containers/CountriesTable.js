import { connect } from 'react-redux';
import { getData } from '../selectors/data';

import CountriesTable from '../components/CountriesTable/CountriesTable';
import { doCountriesDataLoading, doCountriesDataSort } from '../actions/countriesData';

const mapStateToProps = ({ countriesDataState }) => ({
  data: getData(countriesDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingData: () => dispatch(doCountriesDataLoading()),
  onSortData: (key, sort) => dispatch(doCountriesDataSort(key, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
