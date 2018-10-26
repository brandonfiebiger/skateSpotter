import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import validate from '../../utils/validation';

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
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      passwordConfirmation: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      }
    }
  }

  handleOnChange = (key, value) => {
    this.setState(prevState => {
      return {
        [key]: {
          ...prevState[key],
          valid: validate(value, prevState[key].validationRules, this.state.password.value),
          value
        }
      };
    });
  };

  render() {
    return (
      <View>
        <TextInput value={this.state.email.value} onChangeText={val => this.handleOnChange('email', val)}/>
        <TextInput value={this.state.password.value} onChangeText={val => this.handleOnChange('password', val)}/>
        <TextInput value={this.state.passwordConfirmation.value} onChangeText={val => this.handleOnChange('passwordConfirmation', val)}/>
        <Button title="Sign Up" onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {

  }
})

export default SignUp;