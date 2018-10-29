import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class SpotCard extends Component {
  render() {
    const { name, description, image } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={[styles.header, styles.text]}>{name}</Text>
          <Text style={[styles.description, styles.text]}>{description}</Text>
          <Text style={[styles.distance, styles.text]}>
            Distance From Me: 4 mi.
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
    width: '100%'
  },
  imageContainer: {
    height: '50%',
    width: '100%'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 5,
    // justifyContent: 'space-around',
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
