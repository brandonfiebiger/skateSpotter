import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import validate from '../../utils/validation';

class CameraRoll extends Component {
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
      }
    };
  }

  selectImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Select an Image' }, response => {
      if (response.didCancel) {
        console.log('User Cancelled');
      } else if (response.error) {
        console.log('Error', response.error);
      } else {
        this.setState({
          selectedImage: { uri: response.uri }
        });
      }
    });
  };

  updateInputState = (key, value) => {
    this.setState((prevState => {
      return {
        [key]: {
          ...prevState[key],
          valid: validate(value, prevState[key].validationRules),
          value
          
        }
      }
    }))
    console.log(this.state.description.valid)
  }

  handleSubmit = () => {

  }
  
  render() {
    return (
      <View style={styles.view}>
        <Image
          style={styles.imageContainer}
          source={this.state.selectedImage}
        />
        <Button title="Take A Photo!" onPress={this.selectImageHandler} />
        <TextInput style={styles.input} value={this.state.description.value} onChangeText={(val) => this.updateInputState('description', val)}/>
        <Button title="Add New Spot!" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 500,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    textAlign: 'center'

  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  input: {
    width: '80%',
    height: 200,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 0.5
  }
});

export default CameraRoll;
