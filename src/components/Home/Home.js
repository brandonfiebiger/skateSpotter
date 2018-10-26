import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { getUserLocation } from '../../store/actions';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: null
    };
  }

  handleRouteToMap = () => {
    this.props.history.push('/SpotMap');
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        let location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        };
        this.props.getLocation(location);
      },
      err => console.log(err)
    );
  }

  navToSpotIt = () => {
    this.handleRouteToSpotIt();
  };

  handleRouteToSpotIt = () => {
    this.props.history.push('/SpotIt');
  };

  handleRouteToSignUp = () => {
    this.props.history.push('/SignUp')
  }

  render() {
    return (
      <View>
        <Text>SkateSpotter</Text>
        <Button title="Spots Near Me!" onPress={this.handleRouteToMap} />
        <Button title="SignUp" onPress={this.handleRouteToSignUp}/>
        <Button title="Spot It!" onPress={this.navToSpotIt} />
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export const mapDispatchToProps = dispatch => ({
  getLocation: location => dispatch(getUserLocation(location))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
