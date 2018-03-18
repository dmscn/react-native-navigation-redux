import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from "react-navigation";

class SignIn extends Component {
  render() {
    return (
      <View>
        <Text> this is sign in component </Text>
        <Button
          title="Go to Main"
          onPress={() => this.props.navigation.navigate('MainStack')}
        />
      </View>
    );
  }
}

export default SignIn;