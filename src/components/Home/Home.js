import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';

export class Home extends Component {
  routeToMap = () => {
    this.props.history.push('/SpotMap');
  };

  render() {
    return (
      <View>
        <Text>SkateSpotter</Text>
        <Button title="Spots Near Me!" onPress={this.routeToMap}>
          Spots Near Me!
        </Button>
        <Button title="Login">Login</Button>
      </View>
    );
  }
}

export default withRouter(Home);
