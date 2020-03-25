import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import FlashcardCardComponent from './cards/FlashcardCardComponent';

export default class FlashcardListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        { id: 0, name: 'German2' },
        { id: 1, name: 'Histor2y' },
        { id: 2, name: 'Japan2' },
        { id: 3, name: 'Nick is amazing2' },
        { id: 4, name: 'Nick is amazing2' },
        { id: 5, name: 'Nick is amazing2' },
        { id: 6, name: 'Nick is amazing2' },
      ],
    };
  }

  scrollViewLayout(event) {
    console.log(event);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          onLayout={event => this.scrollViewLayout(event)}
          contentContainerStyle={{
            flexGrow: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            padding: 55,
          }}>
          {this.state.subjects.map(subject => {
            return (
              <FlashcardCardComponent
                key={subject.id}
                id={subject.id}
                name={subject.name}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

// justifyContent: 'space-between',
//     flexDirection: 'row',
//     flex: 1,
//     flexWrap: 'wrap',

// {this.state.subjects.map(subject => {
//   return (
//       <FlashcardCardComponent
//           key={subject.id}
//           id={subject.id}
//           name={subject.name}
//       />
//   );
// })}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
