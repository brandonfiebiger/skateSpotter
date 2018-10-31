import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableHighlight
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import Home from '../Home/Home';
import SpotMap from '../SpotMap/SpotMap';
import Avatar from '../../assets/images/avatar-example.png';
import validate from '../../utils/validation';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions'

export class Login extends Component {
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
      allValid: false,
      hasErrored: false
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
      .then(user => {
        this.props.logIn(user)
        this.props.navigation.navigate('Spots Near Me');
      })
      .catch(error => {
        this.setState({hasErrored: true})
        console.log(error)
      });
  };

  render() {
    const { userName, password, allValid, hasErrored } = this.state;

    return (
      <View>
        <Header style={styles.header}>
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
              style={{}}
            />
          </Left>
        </Header>
        <View style={styles.view}>
          {hasErrored && <Text>Email or password did not match</Text>}
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
          <TouchableHighlight
            style={password.valid ? styles.validButton : styles.loginButton}
          >
            <Button
              title="Login"
              onPress={this.handleSubmit}
              disabled={!allValid}
            />
          </TouchableHighlight>
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
    height: 500,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 320
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
  },
  validButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 45,
    marginTop: 20,
    opacity: 0.85,
    paddingTop: 3,
    width: 175
  },
  loginButton: {
    backgroundColor: 'gray',
    borderRadius: 10,
    height: 45,
    marginTop: 20,
    opacity: 0.85,
    paddingTop: 3,
    width: 175
  }
});

export const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
})

export default connect(null, mapDispatchToProps)(Login)
