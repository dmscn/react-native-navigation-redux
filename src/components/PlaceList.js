import React, { Component } from 'react';
import { 
  View,
  Text,  
  FlatList,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import {
  Thumbnail
} from 'native-base';
import colors from 'Colors';

class PlaceList extends Component {

  _createListItem = ({ item }) => (
    <TouchableNativeFeedback onPress={() => this.props.onItemPressed(item.key)}>
      <View style={styles.listItem}>
        <Thumbnail
          square
          size={28}
          source={item.image}
          style={styles.thumbnail}
        />
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList data={this.props.places} renderItem={this._createListItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginVertical: 5,
  },
  
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  listItemText:{
    marginLeft: 10,
    color: '#333'
  },

  thumbnail: {
    width: 40,
    height: 40,
  }
})


export default PlaceList;
