import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SkateBackground from '../../assets/images/skate-spotter-home.png';

export class SpotCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={SkateBackground} />
        </View>
        <View style={styles.contentContainer}>
          <Text>Spot Name</Text>
          <Text>Description</Text>
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

export default connect(
  null,
  null
)(SpotCard);
