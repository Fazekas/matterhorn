import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FrameComponent from './FrameComponent';
import AddSubjectModalComponent from './modals/AddSubjectModalComponent';
import FlashcardListComponent from './FlashcardListComponent';

export default class ListViewComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddSubjectModalComponent isVisible={false} />
        <FrameComponent>
          <FlashcardListComponent />
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
