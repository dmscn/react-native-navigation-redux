import React, { Component } from 'react';
import { 
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import { addPlace } from "../../store/actions/index";
import { connect } from "react-redux";

import PlaceInput from '../../components/PlaceInput';

class SharePlace extends Component {

  _handleAddNewPlace = placeName => {
    this.props.onAddedNewPlace(placeName);
    this.props.navigation.navigate("FindPlace");
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <PlaceInput onAddNewPlace={this._handleAddNewPlace} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddedNewPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlace);
