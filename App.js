import * as React from 'react';
import { StatusBar } from "react-native";
import { Provider } from 'react-redux';
import AppRoute from './src/Navigations/AppRoute';
import store from './src/redux/Store';
const App = () =>{
  return (
    <>
      <Provider store={store}>
        <AppRoute />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}

export default App;

