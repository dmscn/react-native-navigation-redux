import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button
} from 'native-base';
import { strings, placeholders } from "Strings";
import Icon from '@expo/vector-icons/Ionicons';


import UITextInput from './UI/UITextInput';
import UIButton from './UI/UIButton';
import Heading from "./UI/Heading";

class PlaceInput extends Component {
  state = {
    placeName: ''
  }
  
  _handleChangeText = placeName => {
    this.setState({ placeName });
  }

  _handleAddNewPlace = () => {
    this.props.onAddNewPlace(this.state.placeName);
    this.setState({ placeName: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading style={styles.item}>{strings.STR_ADD_NEW_PLACE}</Heading>

        <UITextInput
          style={styles.item}
          placeholder={placeholders.PH_PLACENAME}
          onChangeText={this._handleChangeText} 
          value={this.state.placeName}/>

        <UIButton 
          style={styles.item}
          onPress={this._handleAddNewPlace}>
          Add Place
        </UIButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',
    margin: 16,
  },

  item: {
    margin: 5,
  }
});

export default PlaceInput;
