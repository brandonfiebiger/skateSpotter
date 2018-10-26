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
      },
      allValid: false
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
    }, this.checkForAllValid);
  };

  checkForAllValid = () => {
    const { email, password, passwordConfirmation } = this.state;
    if (email.valid && password.valid && passwordConfirmation.valid) {
      this.setState({
        allValid: true
      })
    } else {
      this.setState({
        allValid: false
      })
    }
  }

  handleSubmit = () => {
    console.log('it works');
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.email.value} onChangeText={val => this.handleOnChange('email', val)} placeholder="email"/>
        <TextInput value={this.state.password.value} onChangeText={val => this.handleOnChange('password', val)} placeholder="password"/>
        <TextInput value={this.state.passwordConfirmation.value} onChangeText={val => this.handleOnChange('passwordConfirmation', val)} placeholder="confirm password"/>
        <Button title="Sign Up" onPress={this.handleSubmit} disabled={!this.state.allValid} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {

  }
})

export default SignUp;