import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Button
} from 'react-native';
import Home from './src/components/Home/Home';
import SpotMap from './src/components/SpotMap/SpotMap';
import { connect } from 'react-redux';
import SpotForm from './src/components/SpotForm/SpotForm';
import SignUp from './src/components/SignUp/SignUp';
import Login from './src/components/Login/Login';
import { populateSpots } from './src/store/actions';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Avatar from './src/assets/images/avatar-example.png';
import LogOut from './src/components/LogOut/LogOut';

export class App extends Component {
  componentDidMount() {
    fetch('https://skate-spotter.herokuapp.com/api/v1/spots')
      .then(response => response.json())
      .then(spots => this.props.populateSpots(spots))
      .catch(error => console.log(error));
  }

  render() {
    return <Drawer />;
  }
}

const Drawer = createDrawerNavigator(
  {
    Home: Home,
    'Spots Near Me': SpotMap,
    Login: Login,
    'Sign Up': SignUp,
    'Spot It': SpotForm,
    'Logout': LogOut
  },
  {
  }
);

export const mapStateToProps = state => ({
  spots: state.spots
});

export const mapDispatchToProps = dispatch => ({
  populateSpots: spots => dispatch(populateSpots(spots)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
