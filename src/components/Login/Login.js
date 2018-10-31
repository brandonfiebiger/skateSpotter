import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import validate from '../../utils/validation';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6
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
    const { userName, password } = this.state;
    if (userName.valid && password.valid) {
      this.setState({
        allValid: true
      });
    } else {
      this.setState({
        allValid: false
      });
    }
  };

  handleSubmit = () => {
    const { userName, password } = this.state;

    fetch('https://skate-spotter.herokuapp.com/api/v1/login', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({
        name: userName.value,
        password: password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  render() {
    const { userName, password, allValid } = this.state;

    return (
      <View style={styles.view}>
        <View style={styles.textInputsContainer}>
          <Button title="Home" onPress={this.directToHome} />
          <TextInput
            style={userName.valid ? [styles.input, styles.valid] : styles.input}
            value={userName.value}
            onChangeText={val => this.handleOnChange('userName', val)}
            placeholder="User name"
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
