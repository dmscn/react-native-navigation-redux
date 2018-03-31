import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Icon from '@expo/vector-icons/Ionicons';

import PlaceList from '../../components/PlaceList';

class FindPlace extends Component {
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlace);
