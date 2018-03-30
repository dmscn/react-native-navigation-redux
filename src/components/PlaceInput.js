import React, { Component } from 'react';
import { 
  View, 
  Text,  
  TextInput,
  Button,
} from 'react-native';

import * as strings from '../strings/strings';

class PlaceInput extends Component {
  state ={
    placeName: ''
  }

  handleChangeText = newPlaceName => {
    this.setState({
      placeName: newPlaceName
    });
  }

  handleAddNewPlace = () => {    
    if(this.state.placeName.trim() === '') return;

    this.props.onAddedNewPlace(this.state.placeName);
    this.setState({
      placeName: ''
    });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder={strings.PH_ADD_NEW_PLACE}
          value={this.state.placeName}
          onChangeText={this.handleChangeText}
        />
        <Button
          title={strings.STR_ADD}
          onPress={this.handleAddNewPlace}
        />
      </View>
    );
  }
}

export default PlaceInput;
