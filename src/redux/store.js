import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from 'redux/rootReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, autoRehydrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';

const persistConfig = {
  key: 'root',
  storage: storage
};
const reduxRouterMiddleware = routerMiddleware(createHashHistory());
const middleware = [thunk, reduxRouterMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware ), devTools)
);

export const persistor = persistStore(store);