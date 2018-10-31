import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import SpotCard from '../SpotCard/SpotCard';

export class SpotContainer extends Component {
  displaySpotCards = () => {
    const { spots } = this.props;

    const cards = spots.map(spot => {
      const image = spot.photos[0].url || spot.photos[0].uri;

      return (
        <SpotCard
          name={spot.name}
          description={spot.description}
          image={{ uri: image }}
          latitude={spot.latitude}
          longitude={spot.longitude}
        />
      );
    });

    return cards;
  };

  render() {
    return (
      <View style={styles.spotContainer}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View>{this.displaySpotCards()}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spotContainer: {
    flex: 1
  },
  contentContainerStyle: {}
});

export const mapStateToProps = state => ({
  spots: state.spots
});

export default connect(
  mapStateToProps,
  null
)(SpotContainer);
