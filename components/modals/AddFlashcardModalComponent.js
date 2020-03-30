import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonComponent from '../baseComponents/ButtonComponent';
import { styleVariables } from '../../style';
import InputComponent from '../baseComponents/InputComponent';
import BaseModalComponent from './BaseModalComponent';
import { Button_TYPES, CONSTS } from '../../constants';

export default class AddFlashcardModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  closeModal = () => {
    this.props.closeModal();
  };

  addFlashcard = () => {
    // make API call to save flashcard
    this.props.closeModal();
  };

  // openImagePIckerAsync = async () => {
  //   let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  //
  //   if (permissionResult.granted === false) {
  //     alert('Permission to access camera roll is required!');
  //     return;
  //   }
  //
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   console.log(pickerResult);
  // };

  render() {
    return (
      <BaseModalComponent isVisible={this.props.isVisible}>
        <InputComponent
          placeholder={CONSTS.TERM}
          label={CONSTS.TERM}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <InputComponent
          placeholder={CONSTS.DEFINITION}
          label={CONSTS.DEFINITION}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <View style={styles.btnContainer}>
          <ButtonComponent
            title={CONSTS.CANCEL}
            variant={Button_TYPES.SECONDARY}
            onPress={() => this.closeModal()}
          />
          <ButtonComponent
            title={CONSTS.SAVE}
            variant={Button_TYPES.PRIMARY}
            style={styles.btnSpacing}
            onPress={() => this.addFlashcard()}
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
