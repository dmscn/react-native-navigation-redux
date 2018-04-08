import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button
} from 'native-base';
import { strings, placeholders } from "Strings";
import Icon from '@expo/vector-icons/Ionicons';


import UITextInput from './UI/UITextInput';
import UIButton from './UI/UIButton';

class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  _handleChangeText = placeName => {
    this.setState({ placeName });
  }

  _handleSubmitText = () => {
    if(this.state.placeName.trim() === '') return;

    this.props.onAddNewPlace(this.state.placeName);
    this.setState({ placeName: '' });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <UITextInput
          onRef={ref => {this._inputPlace = ref}}          
          style={styles.item}
          placeholder={placeholders.PH_PLACENAME}
          onChangeText={this._handleChangeText} 
          value={this.state.placeName}
          autoCapitalize="words"
          returnKeyType="done"
          onBlur={this._handleSubmitText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    margin: 5,
  }
});

export default PlaceInput;
