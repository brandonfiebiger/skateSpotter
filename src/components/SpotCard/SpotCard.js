import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

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
          <Text>Distance From Me:</Text>
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
    height: '50%',
    width: '50%'
  },
  image: {
    height: '50%',
    width: '100%'
  }
});
