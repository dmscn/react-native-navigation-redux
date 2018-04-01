import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from 'Colors';

const UITextInput = props => (
  <TextInput
    ref={props.onRef}
    underlineColorAndroid="transparent"
    selectionColor={colors.primary}
    {...props}
    style={[styles.input, props.style]}
    autoFocus={props.autoFocus}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e8e8e8',
    padding: 5
  }
});

export default UITextInput;
