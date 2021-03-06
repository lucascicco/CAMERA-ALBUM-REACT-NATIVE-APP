import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar }  from 'react-native';

import { store, persistor } from './store';
import Routes from './routes'

export default function Index(){
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
                <Routes />
            </PersistGate>    
        </Provider>
    );
}
