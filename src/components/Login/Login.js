import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        value: '',
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      allValid: false
    };
  }

  directToHome = () => {
    this.props.history.push('/');
  };

  handleOnChange = (key, value) => {
    this.setState(prevState => {
      return {
        [key]: {
          ...prevState[key],
          valid: validate(
            value,
            prevState[key].validationRules,
            this.state.password.value
          ),
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
      });
    } else {
      this.setState({
        allValid: false
      });
    }
  };

  render() {
    const { email, password, allValid } = this.state;

    return (
      <View style={styles.view}>
        <View style={styles.textInputsContainer}>
          <Button title="Home" onPress={this.directToHome} />
          <TextInput
            style={email.valid ? [styles.input, styles.valid] : styles.input}
            value={email.value}
            onChangeText={val => this.handleOnChange('email', val)}
            placeholder="Email"
          />
          <TextInput
            style={password.valid ? [styles.input, styles.valid] : styles.input}
            value={password.value}
            onChangeText={val => this.handleOnChange('password', val)}
            secureTextEntry="true"
            placeholder="Password"
          />
          <Button
            title="Login"
            onPress={this.handleSubmit}
            disabled={!allValid}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  input: {
    height: 30,
    width: '80%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
    paddingLeft: 2
  },
  textInputsContainer: {
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  valid: {
    borderColor: '#137B13',
    borderWidth: 2
  }
});
