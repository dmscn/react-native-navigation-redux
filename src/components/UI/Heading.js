import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Heading extends Component {
  render() {
    return (
      <View {...this.props}>
        <Text style={styles.heading}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default Heading;
