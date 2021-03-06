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
    const {
      name,
      description,
      image,
      latitude,
      longitude,
      userLocation
    } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.header, styles.text]}>{name}</Text>
          <Text style={[styles.description, styles.text]}>{description}</Text>
          <Text style={[styles.distance, styles.text]}>
            {/* Distance From Me: {Math.round(conversions(geolib.getDistance(
              {latitude: userLocation.latitude, longitude: userLocation.longitude},
              {latitude: latitude, longitude: longitude }
            ), 'metres', 'miles') * 100)/ 100} miles */}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: '100%',
    marginBottom: 30
  },
  imageContainer: {
    height: '80%',
    width: '100%'
  },
  contentContainer: {
    flex: 1,
    fontSize: 5,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 20
  },
  description: {
    fontSize: 16
  }
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export default connect(
  mapStateToProps,
  null
)(SpotCard);
