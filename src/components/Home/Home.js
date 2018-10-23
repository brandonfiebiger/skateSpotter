import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Home = (props) => {


  return(
    <View>
      <Text>SkateSpotter</Text>
      <Button title="Spots Near Me!">Spots Near Me!</Button>
      <Button title="Login">Login</Button>
    </View>
  )
}