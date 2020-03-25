import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Card from './Card';
import TextComponent from '../baseComponents/TextComponent';

export default class SubjectCard extends Component {
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
    marginBottom: 50,
  },
  alignText: {
    textAlign: 'center',
  },
});
