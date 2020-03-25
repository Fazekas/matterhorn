import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { styleVariables } from '../../style';

export default class TextComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.textColor, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: styleVariables.textColor,
  },
});
