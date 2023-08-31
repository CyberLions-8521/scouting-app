import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Loading({ navigation }) {

    setTimeout(() => {
        navigation.navigate('Home');
    }, 2000);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.heroContainer}>
                    <Text style={styles.heroText}>Scout</Text>
                    <Image style={styles.heroImage} source={require('../assets/images/first-logo.png')} />
                </View>
                <View style={styles.brandingContainer}>
                    <Text style={styles.brandingText}>from Team 8521</Text>
                    <Image style={styles.brandingImage} source={require('../assets/images/cyberlion-sticker.png')} />
                </View>
            </View>

            <View style={styles.container}>
                <Image style={styles.iconImg} source={require('../assets/images/mobile-icon-no-sky.png')} />
            </View>
        </>
    );
}

// Keep in mind that react native does not have inheritance
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandingContainer: {
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    heroImage: {
        // flex: 1 is inherited by img and will cut off the image when resized. resizeMode fixes this
        resizeMode:'contain',

        width: 100,
        height: 100,
    },
    brandingImage: {
        resizeMode:'contain',
        width: 80,
        height: 80,
    },
    iconImg: {
        width: '100%',
        height: '100%',
    },
    heroText: {
        fontFamily: 'Poppins-Black',
        color: 'red',
        fontSize: 70,

        lineHeight: 80,
    },
    brandingText: {
        fontFamily: 'Poppins-ExtraBold',
        color: 'grey',
        fontSize: 20,
    },
});
