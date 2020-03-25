import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styleVariables } from '../style';
import { Button_TYPES } from '../constants';
import TextComponent from './baseComponents/TextComponent';

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const variant = this.props.variant
      ? this.props.variant
      : Button_TYPES.PRIMARY;
    return (
      <View style={[this.props.btnContainerStyle]}>
        <TouchableOpacity
          style={[styles.button, styles[variant], this.props.style]}>
          <TextComponent>{this.props.title}</TextComponent>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 88,
    height: 36,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  primary: {
    backgroundColor: styleVariables.primaryColor,
  },
  secondary: {
    backgroundColor: styleVariables.secondaryColor,
    borderColor: styleVariables.textColor,
    borderWidth: 1,
  },
});
