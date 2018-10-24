import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { withRouter, Link } from 'react-router-native';
import MapView from 'react-native-maps';

export class SpotMap extends Component {
  directToHome = () => {
    this.props.history.push('/');
  };

  render() {
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
        />
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

export default withRouter(SpotMap);
