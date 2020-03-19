import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FrameComponent from './FrameComponent';
import SubjectList from './SubjectList';
import AddSubjectModalComponent from './AddSubjectModalComponent';

export default class ListViewComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddSubjectModalComponent isVisible={true} />
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
