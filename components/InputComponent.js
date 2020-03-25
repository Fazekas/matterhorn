import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { styleVariables } from '../style';
import TextComponent from './baseComponents/TextComponent';

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.inputContainer, this.props.inputContainerStyle]}>
        <TextComponent style={styles.label}>{this.props.label}</TextComponent>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          placeholderTextColor={styleVariables.textColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 5,
    borderRadius: 4,
    backgroundColor: '#2138B5',
  },
  label: {
    color: '#3F8791',
    paddingLeft: 5,
  },
  input: {
    color: styleVariables.textColor,
    borderBottomWidth: 2,
    paddingLeft: 5,
  },
});
