import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Card from './Card';
import TextComponent from '../baseComponents/TextComponent';

export default class FlashcardCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card cardStyle={styles.cardStyle}>
        <TextComponent style={styles.alignText}>
          {this.props.name}
        </TextComponent>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 0,
    marginBottom: 25,
    width: '100%',
  },
  alignText: {
    textAlign: 'center',
  },
});
