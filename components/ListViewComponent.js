import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FrameComponent from './FrameComponent';
import SubjectList from './SubjectList';

export default class ListViewComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FrameComponent>
          <SubjectList />
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
