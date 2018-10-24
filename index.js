import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/store/reducers/index';
import devToolsEnhancer from 'remote-redux-devtools';


const store = createStore(rootReducer, devToolsEnhancer());

const ReduxStoreConnect = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxStoreConnect);
