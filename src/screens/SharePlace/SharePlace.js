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

import PlaceInput from '../../components/PlaceInput';

class SharePlace extends Component {

  handleAddedNewPlace = place => {
    this.props.onAddedNewPlace(place);
    this.props.navigation.navigate('FindPlace');
  }

  render() {
    return (
      <View>
        <PlaceInput onAddedNewPlace={this.handleAddedNewPlace}/>
      </View>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     places: state.places.places
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    onAddedNewPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlace);
