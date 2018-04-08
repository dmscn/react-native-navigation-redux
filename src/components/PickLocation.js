import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';

class PickLocation extends Component {
  render() {
    return (
       <MapView
        style={[styles.map, this.props.style]}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
    height: 200,
    alignSelf: 'center',
  }
})

export default PickLocation;
