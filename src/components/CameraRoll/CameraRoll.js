import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Spot = t.struct({
  description: t.String,
})

class CameraRoll extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: null
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
  
  render() {
    console.log(this.state)
    return (
      <View style={styles.view}>
        <Image
          style={styles.imageContainer}
          source={this.state.selectedImage}
        />
        <Button title="Take A Photo!" onPress={this.selectImageHandler} />
        <Form type={Spot} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 200,
    marginTop: 20
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});

export default CameraRoll;
