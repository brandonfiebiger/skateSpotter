import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password,
      confirmPassword
    }
  }


  render() {
    return (
      <View>
        <TextInput value={this.state.email.value} />
        <TextInput value={this.state.password.value} />
        <TextInput value={this.state.confirmPassword.value} />
        <Button title="Sign Up" onPress={this.handleSubmit} />
      </View>
    )
  }
}