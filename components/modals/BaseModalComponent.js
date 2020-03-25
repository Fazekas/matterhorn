import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { styleVariables } from '../../style';

export default class BaseModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.modal}>{this.props.children}</View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: styleVariables.secondaryColor,
    padding: 16,
    elevation: 20,
  },
});
