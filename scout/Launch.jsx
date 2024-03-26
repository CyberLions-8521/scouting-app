import robbie from './assets/images/robbie-transparent.png';
import logo from './assets/images/logo.png';

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Launch({ navigation }) {

    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);

        if (isLoading === false){
            setTimeout(() => {
                navigation.navigate('Welcome');
            }, 2000);
          }
    }, [navigation, isLoading]);


    return (
        <>
            <View style={styles.container}>

                <View style={styles.hero}>
                    <Image style={styles.launchImage} alt="Robbie" source={robbie} />
                    <Text style={styles.header}>ROBO SCOUTS</Text>
                </View>

                <View style={styles.credits}>
                    <Text style={styles.smallText}>By Team 8521</Text>

                    <View style={styles.creditsImageBackground}>
                        <Image style={styles.creditsImage} alt="team logo 8521" source={logo} />
                    </View>
                </View>

            </View>
        </>
    );
}

// Keep in mind that react native does not have inheritance
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1584B',
        width: '100%',

        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    hero: {
        // A height and width is required for the image and paragraph to show (code may need optimization)
        width: '100%',
        height: '100%',
        alignItems: 'center',
        gap: 30,
        position: 'absolute',
        top: 200,
    },
    launchImage: {
        width: '40%',
        height: '20%',
    },
    header: {
        fontSize: 50,
        color: 'white',
    },
    credits: {
        alignItems: 'center',
        gap: 15,
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
    },
    creditsImageBackground: {
        width: 50,
        height: 50,
        backgroundColor: '#3A3B3C',
        borderRadius: 25,

        justifyContent: 'center',
        alignItems: 'center',
    },
    creditsImage: {
        width:  40,
        height: 40,
    },
    smallText: {
        color: 'white',
        fontSize: 20,
    },
});
