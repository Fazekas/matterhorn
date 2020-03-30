import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import backgroundImage from './assets/minimalistic-blue-background.png';
import FlashcardListComponent from './components/FlashcardListComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.imageSize}>
          <FlashcardListComponent />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSize: {
    flex: 1,
    height: null,
    width: null,
  },
});
