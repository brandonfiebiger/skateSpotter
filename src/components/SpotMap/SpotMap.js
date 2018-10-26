import React, { Component } from 'react';
import SpotForm from '../SpotForm/SpotForm';
import { Text, View, StyleSheet, Button } from 'react-native';
import { withRouter, Link } from 'react-router-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

export class SpotMap extends Component {
  directToHome = () => {
    this.props.history.push('/');
  };

  render() {
    const { userLocation } = this.props;

    return (
      <View style={styles.mapContainer}>
       <Button title="Home" onPress={this.directToHome} />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 39.7392,
            longitude: -104.9903,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          region={userLocation}
        >
          {userLocation && <MapView.Marker coordinate={userLocation} />}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200,
    marginTop: 20
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(SpotMap)
);
