import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';
import { addSpot } from '../../actions/spots';
import { connect } from 'react-redux';

export class Home extends Component {
  routeToMap = () => {
    this.props.history.push('/SpotMap');
    this.props.addASpot('hello')
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>SkateSpotter</Text>
        <Button title="Spots Near Me!" onPress={this.routeToMap}>
          Spots Near Me!
        </Button>
        <Button title="Login" >Login</Button>
      </View>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addASpot: spot => dispatch(addSpot(spot))
})

export default withRouter(connect(null, mapDispatchToProps)(Home));
