import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
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

  render() {
    return <Drawer />;
  }
}

const CustomDrawerComponent = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: 'white' }}>
        <Image
          source={Avatar}
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      </View>
      <ScrollView>
        <DrawerItems {...props} />
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
  populateSpots: spots => dispatch(populateSpots(spots))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
