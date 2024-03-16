import fillerImage from '../../assets/interface-icons/filler-image.png';

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function StatGlimpse({ name, teamNumber, driveBase, intake }) {
  return (
    <View style={styles.scoutingDataGlimpsePiece}>

        <View style={styles.metadata}>
            <Text style={styles.headerSmaller}>{name} ({teamNumber})</Text>

            <View style={styles.stats}>
                <Text style={styles.text}>Intake: {intake}</Text>
                <Text style={styles.text}>Drive Base: {driveBase}</Text>
            </View>
        </View>

        <Image style={styles.fillerImage} alt="filler image" source={fillerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
    headerSmaller: {
      color: '#616161',
      fontSize: 14,
    },
    text: {
      color: '#616161',
      fontSize: 12,
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
        gap: 10,
        maxWidth: '60%',
        flexWrap: 'wrap',
    },
    fillerImage: {
      width: 120,
      height: '100%',
    },
  });
