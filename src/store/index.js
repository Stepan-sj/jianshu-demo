import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import mySaga from './mysaga'
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(mySaga)

export default store;