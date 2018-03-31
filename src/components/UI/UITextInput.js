import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from 'Colors';

const UITextInput = props => (
  <View>
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.input, props.style]}
      selectionColor={colors.primary}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    padding: 5
  }
});

export default UITextInput;
