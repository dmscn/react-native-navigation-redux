import React, { Component } from 'react';
import { 
  View, 
  Text,  
  FlatList
} from 'react-native';

class PlaceList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.places}
          renderItem={info => (
            <Text>{info.item.name}</Text>
          )}
        />
      </View>
    );
  }
}

export default PlaceList;
