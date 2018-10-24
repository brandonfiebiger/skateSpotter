import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

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
    return (
      <View>
        <Image
          style={styles.imageContainer}
          source={this.state.selectedImage}
        />
        <Button title="Select Image" onPress={this.selectImageHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black'
  }
});

export default CameraRoll;
