import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
// Import all reducers
import * as allReducers from './reducers/all.reducers';
// Import rootSaga that contains setup for all sagas
import rootSaga from './sagas/rootSaga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        ...allReducers,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
