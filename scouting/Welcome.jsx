import robbie from './assets/images/robbie-transparent.png';
import FIRSTlogo from './assets/images/FIRST.png';
import floor from './assets/images/floor.png';

import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Launch({ navigation }) {

    let navigateToMain = () => {
        navigation.navigate('Navigator');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topPiece} />

            <View style={styles.mainContent}>

                <View style={styles.mainContentText}>
                    <Text style={styles.heroText}>Welcome!</Text>
                    <Text style={styles.infoText}>Record data about other teams, such as their drivebase, win/loss ratio, and more!</Text>


                    <Pressable onPress={navigateToMain}>
                        <Text style={styles.continueButton}>Get Started</Text>
                    </Pressable>
                </View>
            </View>

            {/* Navigate to navigator.jsx component, which has its own navigation into more screen components */}
            <View style={styles.mainContentImage}>
                <Image style={styles.floor} alt={'background'} source={floor} />
                <Image style={styles.robbie} alt={'Robbie'} source={robbie} />

                <View style={styles.credits}>
                    <Text style={styles.creditsText}>Robo Scouts was made for</Text>
                    <Image style={styles.FIRSTlogo} alt={'FIRST logo'} source={FIRSTlogo} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',

        alignItems: 'center',
        flexDirection: 'column',
      },
    topPiece: {
        width: '100%',

        // estimated height relative to the topPiece in other files because this one does not have a bottom tab navigator to take up space
        height: '7.5%',
        backgroundColor: '#E1584B',
      },
    mainContent: {
        height: '65%',
        maxWidth: '90%',
    },
    mainContentText: {
        alignItems: 'center',
        paddingTop: 30,
        gap: 60,
    },
    heroText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    infoText: {
        fontSize: 25,
        color: 'black',
        maxWidth: '90%',
        textAlign: 'center',
    },
    continueButton: {
        borderRadius: 2,
        backgroundColor: '#E1584B',
        borderColor: 'black',
        width: '150',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 40,
        paddingRight: 40,
        color: 'white',
    },
    mainContentImage: {
        height: '37.5%',
        width: '100%',
        overflow: 'hidden',

        position: 'relative',
    },
    floor: {
        position: 'absolute',

        // Size is 100% of its parent and not itself due to position: absolute
        width: '100%',
        height: '50%',
        zIndex: 1,
        bottom: 85,
    },
    // whitespace on robbie (not due to code)
    robbie: {
        position: 'absolute',
        width: 200,
        height: 200,
        zIndex: 3,
        right: 0,
        top: -15,
    },
    credits: {
        flexDirection: 'row',
        position: 'absolute',

        // weird bug where bottom: 0 makes the content come off the screen even though that shouldn't happen
        // currently using alternative until a fix is found
        top: '60%',
        left: '15%',
        zIndex: 4,
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
    },
    creditsText: {
        fontSize: 20,
        zIndex: 4,
        fontWeight: 'bold',
        color: 'white',
    },
    FIRSTlogo: {
        width: 35,
        height: 30,
        zIndex: 4,
    },
});
