import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import SpotContainer from '../SpotContainer/SpotContainer';

export class SpotMap extends Component {
  directToHome = () => {
    this.props.history.push('/');
  };

  render() {
    const { userLocation, spots } = this.props;

    const displayMarkers = spots.map((location, index) => {
      const fullLocation = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };

      return <MapView.Marker coordinate={fullLocation} key={index} />;
    });

    return (
      <View style={styles.mapContainer}>
        <Button title="Home" onPress={this.directToHome} />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 13.123456,
            longitude: 42.456123,
            latitudeDelta: 15.6922,
            longitudeDelta: 15.6421
          }}
          region={userLocation}
        >
          {userLocation && (
            <MapView.Marker coordinate={userLocation}>
              <View>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>
          )}
          {displayMarkers}
        </MapView>
        <SpotContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '90%',
    marginTop: 20
  },
  map: {
    width: '100%',
    height: '40%'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation,
  spots: state.spots
});

export default connect(
  mapStateToProps,
  null
)(SpotMap);
