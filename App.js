import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListViewComponent from './components/ListViewComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListViewComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
