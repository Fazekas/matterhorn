import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import FlashcardCardComponent from './cards/FlashcardCardComponent';
import FrameComponent from './FrameComponent';
import AddFlashcardModalComponent from './modals/AddFlashcardModalComponent';

export default class FlashcardListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        { id: 0, name: 'German2', definition: 'def1' },
        { id: 1, name: 'Histor2y', definition: 'def1' },
        { id: 2, name: 'Japan2', definition: 'def1' },
        { id: 3, name: 'Austria2', definition: 'def1' },
        { id: 4, name: 'China2', definition: 'def1' },
        { id: 5, name: 'Russia2', definition: 'def1' },
        { id: 6, name: 'India2', definition: 'def1' },
      ],
      isAddFlashcardVisible: false,
    };
  }

  showAddFlashcardModal = () => {
    this.setState({ isAddFlashcardVisible: true });
  };

  closeFlashcardModal = () => {
    this.setState({ isAddFlashcardVisible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddFlashcardModalComponent
          isVisible={this.state.isAddFlashcardVisible}
          closeModal={this.closeFlashcardModal.bind(this)}
        />
        <FrameComponent onAddPress={this.showAddFlashcardModal.bind(this)}>
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.scrollContainer}>
              {this.state.subjects.map(subject => {
                return (
                  <FlashcardCardComponent
                    key={subject.id}
                    id={subject.id}
                    term={subject.name}
                    definition={subject.definition}
                  />
                );
              })}
            </ScrollView>
          </View>
        </FrameComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 55,
  },
});
