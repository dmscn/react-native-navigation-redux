import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/Ionicons';

import { removePlace } from '../../store/actions/index'
import PlaceList from '../../components/PlaceList';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const initialState = {
  placeDetailsVisible: false,
  selectedPlace: ''
};

class FindPlace extends Component {
  state = initialState

  _showPlaceDetails = key => {
    let selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });

    this.setState({ 
      placeDetailsVisible: true,
      selectedPlace: selectedPlace
    })
  }

  _closePlaceDetails = () => {
    this.setState(initialState);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <PlaceList 
          places={this.props.places}
          onItemPressed={this._showPlaceDetails} />
        
        <PlaceDetails
          visible={this.state.placeDetailsVisible}
          place={this.state.selectedPlace}
          onRequestClose={this._closePlaceDetails}
          onDeleteItem={this.props.onDeletePlace} />
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
    onDeletePlace: key => dispatch(removePlace(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlace);
