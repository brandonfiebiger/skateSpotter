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
import { logout } from '../../store/actions';
import CookieManager from 'react-native-cookies';

export class LogOut extends Component {

  logoutUser = () => {
    console.log("hello");
    fetch('https://skate-spotter.herokuapp.com/api/v1/logout')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      CookieManager.clearAll();
      })
    .catch(error => console.log(error))
    this.props.logout();
    this.props.navigation.navigate('Home');
  };

  redirect = () => {
    this.props.navigation.navigate('Spots Near Me');
  }

  render() {
    return (
      <ImageBackground style={styles.homeContainer} source={SkateBackground}>
        <Text style={styles.homeHeader}>Are you sure?</Text>
        <TouchableHighlight style={styles.homeButton}>
          <Button color="#f7f7f7" title="Yes" onPress={this.logoutUser} />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.homeButton, styles.loginButton]}>
          <Button color="#f7f7f7" title="No" onPress={this.redirect} />
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

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
