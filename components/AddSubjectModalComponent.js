import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonComponent from './ButtonComponent';
import { styleVariables } from '../style';
import InputComponent from './InputComponent';
import BaseModalComponent from './BaseModalComponent';
import { Button_TYPES, CONSTS } from '../constants';

export default class AddSubjectModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseModalComponent isVisible={this.props.isVisible}>
        <InputComponent
          placeholder={CONSTS.SUBJECT}
          label={CONSTS.SUBJECT}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <View style={styles.btnContainer}>
          <ButtonComponent
            title={CONSTS.CANCEL}
            variant={Button_TYPES.SECONDARY}
          />
          <ButtonComponent
            title={CONSTS.SAVE}
            variant={Button_TYPES.PRIMARY}
            style={styles.btnSpacing}
          />
        </View>
      </BaseModalComponent>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: styleVariables.secondaryColor,
    padding: 16,
    elevation: 20,
  },
  inputContainerStyle: {
    marginBottom: 22,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnSpacing: {
    marginLeft: 20,
  },
});
