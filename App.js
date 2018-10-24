import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route, NativeRouter, withRouter } from 'react-router-native';
import Home from './src/components/Home/Home';
import SpotMap from './src/components/SpotMap/SpotMap';
import { connect } from 'react-redux';
import { addSpot } from './src/actions/spots'

export class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/SpotMap" component={SpotMap} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
})


export default connect(mapStateToProps, null)(App);