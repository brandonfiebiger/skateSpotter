import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SpotCard from '../SpotCard/SpotCard';

export class SpotContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  displaySpotCards = () => {
    let cards = [];
    for (let i = 0; i < 10; i++) {
      return <SpotCard />;
    }
  };

  render() {
    return (
      <View style={styles.spotContainer}>
        <SpotCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spotContainer: {
    flex: 1
  }
});

export default connect(
  null,
  null
)(SpotContainer);
