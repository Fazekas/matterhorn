import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

export default class SubjectCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card cardStyle={styles.stuff}>
                <Text style={styles.things}>{this.props.name}</Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    stuff: {
        marginBottom: 50,
    },
    things: {
        color: '#6DE9FA',
    }
})
