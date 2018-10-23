import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';

export const Home = (props) => {

  const routeToMap = () => {
    // this.props.history.push('/SpotMap')
    console.log(this.props)
  } 



  return(
    <View>
      <Text>SkateSpotter</Text>
      <Button title="Spots Near Me!" onPress={routeToMap}>Spots Near Me!</Button>
      <Button title="Login">Login</Button>
    </View>
  )
}

export default withRouter(Home)