import { connect } from 'react-redux';
import { getIsLoadingStatus, getData, getIsErrorStatus } from '../selectors/data';

import CountriesTable from '../components/CountriesTable/CountriesTable';

const mapStateToProps = ({ countriesDataState }) => ({
  isLoading: getIsLoadingStatus(countriesDataState),
  data: getData(countriesDataState),
  isError: getIsErrorStatus(countriesDataState),
});

export default connect(mapStateToProps, null)(CountriesTable);
