import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import Home from '../Home/Home';
import SpotMap from '../SpotMap/SpotMap';
import Avatar from '../../assets/images/avatar-example.png';

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
      <View>
        <Header style={styles.header}>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <View style={styles.view}>
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
  header: {
    width: '100%',
    height: 50
  },
  view: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
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
  valid: {
    borderColor: '#137B13',
    borderWidth: 2
  }
});
