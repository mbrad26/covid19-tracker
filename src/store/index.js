import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger} from 'redux-logger';

const logger = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger)
);

export default store;
