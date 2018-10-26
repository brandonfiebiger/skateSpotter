import React, { Component } from 'react';
import SkateBackground from '../../assets/images/skate-spotter-home.png';
import {
  ImageBackground,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
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
      <ImageBackground style={styles.homeContainer} source={SkateBackground}>
        <Text style={styles.homeHeader}>SkateSpotter</Text>
        <TouchableHighlight style={styles.homeButton}>
          <Button
            color="#f7f7f7"
            title="Spots Near Me!"
            onPress={this.handleRouteToMap}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.homeButton}>
          <Button color="#f7f7f7" title="Login" />
        </TouchableHighlight>
        <TouchableHighlight style={styles.homeButton}>
          <Button color="#f7f7f7" title="Spot It!" onPress={this.navToSpotIt} />
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  homeHeader: {
    fontSize: 50,
    fontFamily: 'Anton',
    opacity: 0.95
  },
  homeButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 45,
    marginTop: 20,
    opacity: 0.8,
    paddingTop: 3,
    width: 175
  }
});

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
