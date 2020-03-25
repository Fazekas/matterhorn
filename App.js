import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import ListViewComponent from './components/ListViewComponent';
import backgroundImage from './assets/minimalistic-blue-background.png';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={backgroundImage} style={styles.imageSize}>
          <ListViewComponent />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  imageSize: {
    flex: 1,
    height: null,
    width: null,
  },
});
