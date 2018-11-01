import React, { Component } from 'react';
import {
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
import { populateSpots, logIn } from './src/store/actions';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Avatar from './src/assets/images/avatar-example.png';
import LogOut from './src/components/LogOut/LogOut';

export class App extends Component {
  componentDidMount() {
    fetch('https://skate-spotter.herokuapp.com/api/v1/spots')
      .then(response => response.json())
      .then(spots => this.props.populateSpots(spots))
      .catch(error => console.log(error));

      fetch('https://skate-spotter.herokuapp.com/api/v1/skater_page')
        .then(response => response.json())
        .then(user => this.props.login(user))
        .catch(error => console.log(error));
  }

  render() {
    return this.props.currentUser ? <LoggedInDrawer /> : <LoggedOutDrawer />
  }
}

const LoggedOutDrawer = createDrawerNavigator (
  {
    Home: Home,
    'Spots Near Me': SpotMap,
    Login: Login,
    'Sign Up': SignUp,
    
  } 
);

const LoggedInDrawer = createDrawerNavigator(
  {
    'Spots Near Me': SpotMap,
    'Spot It': SpotForm,
    'Logout': LogOut
  }
);

export const mapStateToProps = state => ({
  spots: state.spots,
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  populateSpots: spots => dispatch(populateSpots(spots)),
  login: (user) => dispatch(logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
