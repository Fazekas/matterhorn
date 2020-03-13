import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import SubjectCard from './SubjectCard';

export default class SubjectList extends Component{

  

  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {id: 0, name: 'German'},
        {id: 1, name: 'History'},
      ]
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
          <ScrollView>
            {
              this.state.subjects.map(subject => {
                return <SubjectCard key={subject.id} id={subject.id} name={subject.name} />
                })
            }
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,

  },
  backgroundImage:{
    flex: 1,
    height:  null,
    width: null,
    resizeMode: 'cover'
  },
});