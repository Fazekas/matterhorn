import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FrameComponent from './FrameComponent';

export default class ListViewComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FrameComponent>
          <Text>This is transcluded</Text>
        </FrameComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 50,
  },
  footer: {
    backgroundColor: 'blue',
    height: 100,
  },
});
