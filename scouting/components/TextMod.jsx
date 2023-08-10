import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Dogpro() {
    return (
        <View style={styles.container}>
            <Text style={styles.redText}>Hello!</Text>
        </View>
    );
}

// CSS in React Native is done with JavaScript objects (key-value pairs)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    redText: {
        color: 'red',
    },
});

