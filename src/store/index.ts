import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducer from './modules/reduxPersist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const SagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer(rootReducer),
  applyMiddleware(SagaMiddleware)
);

SagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;