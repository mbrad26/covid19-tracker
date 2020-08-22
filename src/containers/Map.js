import { connect } from 'react-redux';

import Map from '../components/Map/Map';
import { getViewPort } from '../selectors/data';
import { doChangeViewPort } from '../actions/mapboxData';

const mapStateToProps = ({ mapboxDataState }) => ({
  viewPort: getViewPort(mapboxDataState),
});

const mapDispatchToProps = dispatch => ({
  onViewChange: viewPort => dispatch(doChangeViewPort(viewPort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
