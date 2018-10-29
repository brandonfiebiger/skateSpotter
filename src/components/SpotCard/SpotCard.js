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
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Text>Distance From Me: 4 mi.</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%'
  },
  imageContainer: {
    height: '50%',
    width: '50%'
  },
  contentContainer: {
    flex: 1,
    fontSize: 5,
    justifyContent: 'space-around',
    height: '50%',
    width: '50%'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  routeButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 30,
    opacity: 0.8,
    paddingBottom: 5,
    textAlignVertical: 'center',
    width: 80
  }
});
