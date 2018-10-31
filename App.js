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

export class App extends Component {
  componentDidMount() {
    fetch('https://skate-spotter.herokuapp.com/api/v1/spots')
      .then(response => response.json())
      .then(spots => this.props.populateSpots(spots))
      .catch(error => console.log(error));
  }

  logoutUser = () => {
    fetch('https://skate-spotter.herokuapp.com/api/v1/logout');
    this.props.logout();
  };

  render() {
    return <Drawer />;
  }
}

const CustomDrawerComponent = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 150,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          source={Avatar}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40
          }}
        />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
        <Button title="Log Out" onPress={this.logoutUser} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator(
  {
    Home: Home,
    'Spots Near Me': SpotMap,
    Login: Login,
    'Sign Up': SignUp,
    'Spot It': SpotForm
  },
  {
    contentComponent: CustomDrawerComponent
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
