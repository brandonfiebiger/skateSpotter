import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { withRouter } from 'react-router-native';
import MapView from 'react-native-maps';


export const SpotMap = (props) => {


  return (
    <View>
      <Text>Hello World</Text>
      <MapView></MapView>
    </View>
  )
}

export default withRouter(SpotMap)