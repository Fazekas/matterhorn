import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={[styles.container, this.props.cardStyle]}>
          {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#35AAEC',
    padding: 8,
    borderRadius: 20,
    height: 90,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
});