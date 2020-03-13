import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

export default class SubjectCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <Text>{this.props.name}</Text>
            </Card>
        );
    }
}
