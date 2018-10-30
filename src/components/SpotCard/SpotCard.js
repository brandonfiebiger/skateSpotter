import React, { Component } from 'react';
import { connect } from 'react-redux';
import geolib from 'geolib';
import conversions from 'conversions';

import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export class SpotCard extends Component {
  render() {
    const { name, description, image, latitude, longitude, userLocation } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.header, styles.text]}>{name}</Text>
          <Text style={[styles.description, styles.text]}>{description}</Text>
          <Text style={[styles.distance, styles.text]}>
            Distance From Me: {conversions(geolib.getDistance(
              {latitude: userLocation.latitude, longitude: userLocation.longitude},
              {latitude: latitude, longitude: longitude }
            ), 'metres', 'miles')} miles
          </Text>
          <TouchableHighlight style={styles.routeButton}>
            <Button color="#f7f7f7" title="Route" />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 700,
    width: '100%',
    marginTop: 30,
    marginBottom: 30
  },
  imageContainer: {
    height: '80%',
    width: '100%'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 5,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  routeButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 35,
    opacity: 0.8,
    paddingBottom: 5,
    width: 80
  },
  header: {},
  description: {},
  distance: {},
  text: {}
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation
})


export default connect(mapStateToProps, null)(SpotCard)
