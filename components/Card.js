import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cardText}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderRadius: 20,
    height: 90,
    width: 110,
    textAlign: "center",
  },
  cardText: {
    textAlign: "center"
  }
});