import React, { Component } from 'react';
import { 
  View, 
  Text,  
  TextInput,
  Button,
  FlatList,
  ListItem,
} from 'react-native';

import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';

class SharePlace extends Component {
  state ={
    placeName: ''
  }

  onChangeText = newPlaceName => {
    this.setState({
      placeName: newPlaceName
    })
  }

  handleAddPlace = () => {
    this.props.onAddedPlace(this.state.placeName);
    this.setState({
      placeName: ''
    })
  }

  render() {
    return (
      <View>
        <TextInput 
          placeholder="Share a place"
          value={this.state.placeName}
          onChangeText={this.onChangeText}
        />

        <Button
          title="Add"
          onPress={this.handleAddPlace}
        />            
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddedPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlace);
