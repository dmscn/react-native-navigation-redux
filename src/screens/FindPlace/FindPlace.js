import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Button,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

class FindPlace extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.places}</Text>
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

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlace);
