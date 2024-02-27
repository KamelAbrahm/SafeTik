import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import rootReducers from './src/redux/reducers';
import AuthScreen from './src/screens/auth';
import AuthMenu from './src/components/auth/menu';
import { getAuth } from '@firebase/auth';
import Route from './src/components/navigation/main';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '@firebase/auth: Auth (10.8.0):',
  "You attempted to use a firebase module that's not installed on your Android project by calling firebase.app()",
]);

const firebaseConfig = {
  apiKey: 'AIzaSyDSyALi8C3VNBOwJpiacC0sk6sfziEBy3E',
  authDomain: 'safetok-d271d.firebaseapp.com',
  projectId: 'safetok-d271d',
  storageBucket: 'safetok-d271d.appspot.com',
  messagingSenderId: '334283675108',
  appId: '1:334283675108:web:7e7eb5d209e9b3d39163f1',
  measurementId: 'G-HZ65CMLK93',
};

const store = createStore(rootReducers, applyMiddleware(thunk));

const fireapp = initializeApp(firebaseConfig);
const auth = getAuth(fireapp);

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
