import React from 'react'
import reducers from './reducers';
import sagas from './sagas';
import {configureStore} from '@reduxjs/toolkit'; 
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import createSagaMiddleware from 'redux-saga';
import localStorage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    whitelist: ['common'],
    storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:persistedReducer,
    middleware:[sagaMiddleware,thunk]
});

export const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export const StoreProvider = (props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {props.children}
        </PersistGate>
    </Provider>
);

export const dispatch = type => store.dispatch(type);
export const select = selector => {
    return  selector(store.getState());
};
