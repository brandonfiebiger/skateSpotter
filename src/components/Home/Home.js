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
import { getUserLocation } from '../../store/actions';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: null
    };
  }

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
      error => console.log(error)
    );
  }

  handleSignUp = () => {
    this.props.navigation.navigate('Sign Up');
  };

  handleLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <ImageBackground style={styles.homeContainer} source={SkateBackground}>
        <Text style={styles.homeHeader}>SkateSpotter</Text>
        <TouchableHighlight style={styles.homeButton}>
          <Button color="#f7f7f7" title="Login" onPress={this.handleLogin} />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.homeButton, styles.loginButton]}>
          <Button color="#f7f7f7" title="Sign Up" onPress={this.handleSignUp} />
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
  homeContent: {
    marginBottom: 20
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
    opacity: 0.85,
    paddingTop: 3,
    width: 175
  },
  loginButton: {
    marginBottom: 70
  }
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export const mapDispatchToProps = dispatch => ({
  getLocation: location => dispatch(getUserLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
