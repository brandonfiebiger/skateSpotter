import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      userLocation: null
    };
  }
  handlePress = () => {
    this.handleRouteToMap();
  };

  handleRouteToMap = () => {
    this.props.history.push('/SpotMap');
  };

  render() {
    return (
      <View>
        <Text>SkateSpotter</Text>
        <Button title="Spots Near Me!" onPress={this.handlePress} />
        <Button title="Login" />
      </View>
    );
  }
}

export default withRouter(Home);
