import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { styleVariables } from '../style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FrameComponent extends Component {
  constructor(props) {
    super(props);
  }

  onAddPress = () => {
    this.props.onAddPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="settings" color={styleVariables.primaryColor} size={36} />
        </View>
        <View style={styles.container}>{this.props.children}</View>
        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <Icon
              style={styles.addIcon}
              name="add-circle"
              color={styleVariables.primaryColor}
              size={90}
              onPress={() => {
                this.onAddPress();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    alignItems: 'flex-end',
    padding: 15,
  },
  footerContainer: {
    justifyContent: 'flex-end',
  },
  footer: {
    height: 100,
    alignItems: 'flex-end',
  },
  addIcon: {
    marginRight: 30,
  },
});
