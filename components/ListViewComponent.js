import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FrameComponent from './FrameComponent';
import FlashcardListComponent from './FlashcardListComponent';
import AddFlashcardModalComponent from './modals/AddFlashcardModalComponent';

export default class ListViewComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <AddFlashcardModalComponent isVisible={true} />
        <FrameComponent>
          <FlashcardListComponent />
        </FrameComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
  },
  footer: {
    height: 100,
  },
});
