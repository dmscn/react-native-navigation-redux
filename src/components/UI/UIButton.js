import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

import colors from 'Colors';

class UIButton extends Component {
  render() {
    return (
      <View style={styles.parentContainer}>
        <TouchableNativeFeedback onPress={this.props.onPress}>
            <View style={[ styles.buttonContainer, { backgroundColor: this.props.color || colors.primary }, this.props.style ]}>
              <Text style={[ styles.text, { color: this.props.textColor || colors.white } ]}>
                {this.props.children}
              </Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    alignSelf: "center",
    overflow: "hidden",
  },

  buttonContainer: {
    padding: 10,
  }
});

export default UIButton;