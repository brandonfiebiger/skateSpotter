import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addSpot } from '../../store/actions';
import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';
import validate from '../../utils/validation';
import { accessKey, secretKey } from '../../utils/keys';

class SpotForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: null,
      description: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 20
        }
      },
      name: {
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

  checkForAllValid = () => {
    const { name, description, selectedImage } = this.state;
    if (name.valid && description.valid && selectedImage) {
      this.setState({
        allValid: true
      });
    } else {
      this.setState({
        allValid: false
      });
    }
  };

  selectImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Select an Image' }, response => {
      if (response.didCancel) {
        console.log('User Cancelled');
      } else if (response.error) {
        console.log('Error', response.error);
      } else {
        const file = {
          uri: response.uri,
          name: response.fileName,
          type: 'image/png'
        };
        const config = {
          keyPrefix: 'skateSpotter/',
          bucket: 'skatespots',
          region: 'us-east-2',
          accessKey,
          secretKey,
          successActionStatus: 201
        };
        RNS3.put(file, config).then(data =>
          this.setState({
            selectedImage: { uri: data.body.postResponse.location }
          })
        );
      }
    });
  };

  handleOnChange = (key, value) => {
    this.setState(prevState => {
      return {
        [key]: {
          ...prevState[key],
          valid: validate(value, prevState[key].validationRules),
          value
        }
      };
    }, this.checkForAllValid);
  };

  handleSubmit = () => {
    const { description, selectedImage, name } = this.state;
    const { latitude, longitude } = this.props.userLocation;

    fetch('https://skate-spotter.herokuapp.com/api/v1/new_spot', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        longitude: longitude,
        latitude: latitude,
      }),
      headers: {
        'Content-Type': 'appliction/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.props.addSpot({
        description: description.value,
        photos: [selectedImage],
        name: name.value,
        latitude,
        longitude,
        photo_url: selectedImage
      });
    })
    .catch(error => console.log(error));

  };

  render() {
    return (
      <View style={styles.view}>
        <Button title="Home" onPress={this.directToHome} />
        <Image
          style={styles.imageContainer}
          source={this.state.selectedImage}
        />
        <Button title="Take A Photo" onPress={this.selectImageHandler} />
        <TextInput
          style={styles.nameInput}
          value={this.state.name}
          onChangeText={val => this.handleOnChange('name', val)}
          placeholder="Spot Name"
        />
        <TextInput
          style={styles.description}
          value={this.state.description.value}
          onChangeText={val => this.handleOnChange('description', val)}
          placeholder="Description"
        />
        <Button
          title="Add New Spot!"
          onPress={this.handleSubmit}
          disabled={!this.state.allValid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '90%',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  imageContainer: {
    width: '100%',
    height: 400,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  description: {
    width: '80%',
    height: 80,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 0.5
  },
  nameInput: {
    width: '80%',
    height: 40,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 0.5
  }
});

export const mapStateToProps = state => ({
  userLocation: state.userLocation
});

export const mapDispatchToProps = dispatch => ({
  addSpot: spot => dispatch(addSpot(spot))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
