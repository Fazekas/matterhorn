import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FrameComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.frameComponent}>
        <View style={styles.header}>
          <Icon name="settings" color="#35AAEC" size={36} />
        </View>
        {this.props.children}
        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <Icon
              style={styles.addIcon}
              name="add-circle"
              color="#35AAEC"
              size={90}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frameComponent: {
    flex: 1,
  },
  header: {
    height: 50,
    alignItems: 'flex-end',
    padding: 15,
  },
  footerContainer: {
    flex: 1,
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
