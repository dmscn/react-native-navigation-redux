import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from 'react-redux';
import { SwitchNavigator, addNavigationHelpers } from "react-navigation";

import { AuthStack, MainStack } from "../navigation";

export const AppNavigator = SwitchNavigator(
  {
    AuthStack: AuthStack,
    MainStack: MainStack
  },
  {
    headerMode: "none",
    initialRouteName: "MainStack" // temporary
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
