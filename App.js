import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SubjectList from './components/SubjectList'

export default function App() {
  return (    
    <View style={styles.container}>
      <SubjectList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
