import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';
import { ImagePicker } from 'expo';

import colors from 'Colors';
import { buttons } from 'Strings';

import UIButton from './UI/UIButton';
import { Icon } from 'native-base';

class PickImage extends Component {
  state = {
    image: null
  }

  _handlePickImage = () => {
    
  }

  _imagePlaceholder = () => (
    !this.state.image
      ? <Icon name="add" size={60} style={{fontSize: 50, color: colors.darkGray}} />
      : <Image source={this.state.image} style={styles.previewImage} />
  )

  _handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      aspect: [3, 3]
    });
    
    console.log('ImagePicker result = ', result);

    if(!result.cancelled) {
      this.setState({
        image: { uri: result.uri }
      });
    }

    this.props.onImagePicked({ uri: result.uri, base64: result.base64 });
  }

  render() {
    return (
      <View style={this.props.style}>
        <TouchableNativeFeedback onPress={this._handlePickImage}>
          <View style={styles.placeholder}>
              {this._imagePlaceholder()}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeholder: {
    width: 150,
    height: 150,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  previewImage: {
    width: '100%',
    height: '100%',
  }
});

export default PickImage;
