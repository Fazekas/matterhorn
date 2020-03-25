import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import SubjectCard from './cards/SubjectCard';

export default class SubjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        { id: 0, name: 'German' },
        { id: 1, name: 'History' },
        { id: 2, name: 'Japan' },
        { id: 3, name: 'Nick is amazing' },
      ],
    };
  }

  componentDidMount() {
    // call to datatbase
    // const testSubjects = ['German', 'History', 'Chess', 'AniMals']
    // const testSubjects = [
    //   {id: 0, name: 'German'},
    //   {id: 1, name: 'History'},
    // ]
    // this.setState({
    //   subjects: testSubjects
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexGrow: 1,
            flexWrap: 'wrap',
          }}>
          {this.state.subjects.map(subject => {
            return (
              <SubjectCard
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

const styles = StyleSheet.create({
  container: {
    padding: 55,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },
});
