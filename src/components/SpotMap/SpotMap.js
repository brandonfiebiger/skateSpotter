import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { Header, Left, Icon } from 'native-base';
import MapView from 'react-native-maps';
import SpotContainer from '../SpotContainer/SpotContainer';

export class SpotMap extends Component {
  render() {
    const { userLocation, spots } = this.props;

    const displayMarkers = spots.map((location, index) => {
      const fullLocation = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };

      return (
        <MapView.Marker
          description={location.description}
          title={location.name}
          coordinate={fullLocation}
          key={index}
        />
      );
    });

    return (
      <View style={styles.mapContainer}>
        <Header style={styles.header}>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
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
  header: {
    width: '100%',
    height: 50
  },
  mapContainer: {
    width: '100%',
    height: '100%'
  },
  map: {
    width: '100%',
    height: '60%'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  customView: { height: 100, width: 100 },
  calloutText: { color: 'red' }
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation,
  spots: state.spots
});

export default connect(
  mapStateToProps,
  null
)(SpotMap);
