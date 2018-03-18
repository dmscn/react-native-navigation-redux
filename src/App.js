import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducers from './store/reducers/AppReducers';
import AppWithNavigationState from './navigators/AppNavigator';

class App extends Component {
  store = createStore(AppReducers);

  render() {
    <Prodiver store={store}>
      <AppWithNavigationState />
    </Prodiver>
  }
}

export default App;