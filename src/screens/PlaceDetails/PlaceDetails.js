import React, { Component } from 'react';
import { Modal, View, Image, StyleSheet, Alert } from 'react-native';
import { Footer, Button, Text, Icon } from 'native-base';

import Heading from '../../components/UI/Heading';

class PlaceDetails extends Component {

  _confirmDeletion = () => {
    Alert.alert(
      'Confirm ',
      'Do you want to remove ' + this.props.place.name + ' of your places list?',
      [
        {text: 'Remove', onPress: this._handleDeleteItem },
        {text: 'Cancel', style: 'cancel' }
      ]
    );
  }
  
  _handleDeleteItem = () => {
    this.props.onDeleteItem(this.props.place.key);
    this.props.onRequestClose();
  }

  render() {
    return (
      <Modal animationType="slide" transparent={false} visible={this.props.visible} onRequestClose={this.props.onRequestClose}>
          <View style={styles.modalContainer}>
            <Image source={this.props.place.image} style={styles.image} />
            <Heading>{this.props.place.name}</Heading>

            <View style={styles.buttonContainer}>
              <Button style={styles.stickButtonBottom} info transparent iconLeft onPress={this.props.onRequestClose}>
                <Icon name="md-checkmark" />
                <Text info>OK</Text>
              </Button>
              <Button style={styles.stickButtonBottom} danger transparent iconLeft onPress={this._confirmDeletion}>
                <Icon name="md-trash" danger />
                <Text danger>Delete</Text>
              </Button>
            </View>
          </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },

  image: {
    height: 300,
  },

  buttonContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },

  stickButtonBottom: {
    flex: 1,
    paddingBottom: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  }
})

export default PlaceDetails;
