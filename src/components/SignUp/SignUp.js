import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import validate from '../../utils/validation';

class SignUp extends Component {
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
      userName: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      catchPhrase: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      passwordConfirmation: {
        value: '',
        valid: false,
        validationRules: {
          equalTo: 'password'
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

  handleSubmit = () => {
    const { email, password, passwordConfirmation, userName, catchPhrase } = this.state;

    fetch('https://skate-spotter.herokuapp.com/api/v1/sign_up', {
      method: 'POST',
      body: JSON.stringify({
        name: userName.value,
        email: email.value,
        password: password.value,
        tag: catchPhrase.value
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
    const { email, password, passwordConfirmation, userName, catchPhrase, allValid } = this.state;
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
            style={userName.valid ? [styles.input, styles.valid] : styles.input}
            value={userName.value}
            onChangeText={val => this.handleOnChange('userName', val)}
            placeholder="Username"
          />
          <TextInput
            style={catchPhrase.valid ? [styles.input, styles.valid] : styles.input}
            value={catchPhrase.value}
            onChangeText={val => this.handleOnChange('catchPhrase', val)}
            placeholder="Your best catch phrase"
          />
          <TextInput
            style={password.valid ? [styles.input, styles.valid] : styles.input}
            value={password.value}
            onChangeText={val => this.handleOnChange('password', val)}
            secureTextEntry="true"
            placeholder="Password"
          />
          <TextInput
            style={
              passwordConfirmation.valid
                ? [styles.input, styles.valid]
                : styles.input
            }
            value={passwordConfirmation.value}
            onChangeText={val =>
              this.handleOnChange('passwordConfirmation', val)
            }
            secureTextEntry="true"
            placeholder="Confirm Password"
          />
          <Button
            title="Sign Up"
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

export default SignUp;
