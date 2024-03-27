import fillerImage from '../../assets/interface-icons/filler-image.png';

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// This is the skeleton for the StatGlimpse component
// Code is verbose because I wrote the main view element four times instead of making a new jsx file
export default function StatGlimpseSkeleton() {

  return (
    <>
        <View style={styles.scoutingDataGlimpsePiece}>

        <View style={styles.metadata}>
            <View style={styles.headerSmaller} />

            <View style={styles.stats}>
                <View style={styles.textTypeOne} />
                <View style={styles.textTypeTwo} />
            </View>
        </View>

        <Image style={styles.fillerImage} alt="filler image" source={fillerImage} />
        </View>

        <View style={styles.scoutingDataGlimpsePiece}>

        <View style={styles.metadata}>
            <View style={styles.headerSmaller} />

            <View style={styles.stats}>
                <View style={styles.textTypeOne} />
                <View style={styles.textTypeTwo} />
            </View>
        </View>

        <Image style={styles.fillerImage} alt="filler image" source={fillerImage} />
        </View>

        <View style={styles.scoutingDataGlimpsePiece}>

        <View style={styles.metadata}>
            <View style={styles.headerSmaller} />

            <View style={styles.stats}>
                <View style={styles.textTypeOne} />
                <View style={styles.textTypeTwo} />
            </View>
        </View>

        <Image style={styles.fillerImage} alt="filler image" source={fillerImage} />
        </View>

        <View style={styles.scoutingDataGlimpsePiece}>

        <View style={styles.metadata}>
            <View style={styles.headerSmaller} />

            <View style={styles.stats}>
                <View style={styles.textTypeOne} />
                <View style={styles.textTypeTwo} />
            </View>
        </View>

        <Image style={styles.fillerImage} alt="filler image" source={fillerImage} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    headerSmaller: {
      backgroundColor: '#e8e6e6',
      borderRadius: 5,
      width: 150,
      minHeight: 16,
    },
    textTypeOne: {
        backgroundColor: '#e8e6e6',
        fontSize: 12,
        borderRadius: 5,
        width: 75,
        minHeight: 16,
    },
    textTypeTwo: {
        backgroundColor: '#e8e6e6',
        fontSize: 12,
        borderRadius: 5,
        width: 115,
        minHeight: 16,
    },
    stats: {
        gap: 5,
    },
    scoutingDataGlimpsePiece: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#d3d3d3',
    },
    metadata: {
        gap: 5,
        maxWidth: '60%',
    },
    fillerImage: {
      width: 120,
      height: '100%',
    },
    greyBox: {
      //will adjust to text size
      width: 0,
      height: 0,
      backgroundColor: '#616161',
    },
  });
