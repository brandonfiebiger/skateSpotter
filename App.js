import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, NativeRouter } from 'react-router-native';
import Home from './src/components/Home/Home';
import SpotMap from './src/components/SpotMap/SpotMap';
import { connect } from 'react-redux';
import SpotForm from './src/components/SpotForm/SpotForm';
import SignUp from './src/components/SignUp/SignUp';

export class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/SpotMap" component={SpotMap} />
          <Route exact path="/SpotIt" component={SpotForm} />
          <Route exact path="/SignUp" component={SignUp} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export const mapStateToProps = state => ({
  spots: state.spots
});

export default connect(
  mapStateToProps,
  null
)(App);
