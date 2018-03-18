import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

import App from './src/App';

class UdemyProject extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

export default UdemyProject;