import React, { Component } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Card from './Card';
import TextComponent from '../baseComponents/TextComponent';

export default class FlashcardCardComponent extends Component {
  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        useNativeDriver: true,
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        useNativeDriver: true,
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  };

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }],
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }],
    };

    return (
      <TouchableOpacity
        style={styles.fullWidth}
        onPress={() => this.flipCard()}>
        <Card
          cardStyle={[styles.cardStyle, styles.flipCard, frontAnimatedStyle]}>
          <TextComponent>{this.props.term}</TextComponent>
        </Card>
        <Card
          cardStyle={[
            backAnimatedStyle,
            styles.cardStyle,
            styles.flipCard,
            styles.flipCardBack,
          ]}>
          <TextComponent>{this.props.definition}</TextComponent>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  cardStyle: {
    marginHorizontal: 0,
    marginBottom: 25,
    width: '100%',
  },
  alignText: {
    textAlign: 'center',
  },
  flipCard: {
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
});
