import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LaunchLion from '../assets/images/cute-cyberlion.png';

export default function Loading({ navigation }) {

    setTimeout(() => {
        navigation.navigate('Home');
    }, 2000);

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.launchImage} alt="Cyberlions Logo" source={LaunchLion} />
            </View>
        </>
    );
}

// Keep in mind that react native does not have inheritance
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0efec',
        width: '100%',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    launchImage: {
        width: '50%',
        height: '30%',
    },
});
