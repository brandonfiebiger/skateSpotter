import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SpotCard from '../SpotCard/SpotCard';

export class SpotContainer extends Component {
  displaySpotCards = () => {
    const { spots } = this.props;

    const cards = spots.map(spot => {
      const image = spot.photos[0].url;

      return (
        <SpotCard
          name={spot.name}
          description={spot.description}
          image={{ uri: image }}
        />
      );
    });

    return cards;
  };

  render() {
    return <View style={styles.spotContainer}>{this.displaySpotCards()}</View>;
  }
}

const styles = StyleSheet.create({
  spotContainer: {
    flex: 1
  }
});

export const mapStateToProps = state => ({
  spots: state.spots
});

export default connect(
  mapStateToProps,
  null
)(SpotContainer);
