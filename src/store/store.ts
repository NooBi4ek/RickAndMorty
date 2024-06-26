import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import createSagaMiddleware from 'redux-saga';

import { options } from './axiosConfig';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';

const client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  responseType: 'json',
});

export const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleware();

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['auth'],
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store: any = createStore(
    persistedReducer,
    applyMiddleware(axiosMiddleware(client, options), sagaMiddleWare),
  );
  store.__persistor = persistStore(store);
  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};

export const store = makeStore();