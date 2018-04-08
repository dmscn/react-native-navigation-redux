import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

import { addPlace } from "../../store/actions/index";
import { connect } from "react-redux";

import { strings } from "Strings";

import PlaceInput from '../../components/PlaceInput';
import Heading from "../../components/UI/Heading";
import PickImage from '../../components/PickImage';
import PickLocation from "../../components/PickLocation";

class SharePlace extends Component {
  state = {
    placeName: null,
    image: null
  }

  handleAddNewPlace = () => {
    this.props.onAddedNewPlace(this.state);
    this.props.navigation.navigate("FindPlace");
  };

  handleImagePicked = image => {
    this.setState({image});
  }

  handleAddPlaceName = placeName => {
    this.setState({placeName});
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

          <PickImage style={styles.pickImage} onImagePicked={this.handleImagePicked} />
          <PlaceInput style={styles.placeName} onBlur={this.handleAddPlaceName} />
          <PickLocation />

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },

  placeName: {
    padding: 16,
  },

  pickImage: {
    margin: 10,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddedNewPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlace);
