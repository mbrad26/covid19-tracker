import { connect } from 'react-redux';

import News from '../components/News/News';
import { doNewsLoading } from '../actions/newsData';
import { getNewsData, getIsLoadingStatus, getIsErrorStatus } from '../selectors/data';

const mapStateToProps = ({ newsDataState }) => ({
  articles: getNewsData(newsDataState),
  isError: getIsErrorStatus(newsDataState),
  isLoading: getIsLoadingStatus(newsDataState),
});

const mapDispatchToProps = dispatch => ({
  loadingNewsData: () => dispatch(doNewsLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
