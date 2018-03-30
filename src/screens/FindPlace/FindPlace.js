import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList';

class FindPlace extends Component {
  render() {
    return (
      <PlaceList places={this.props.places} />
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlace);
