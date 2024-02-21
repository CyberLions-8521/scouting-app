import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import StatGlimpse from '../../components/home/StatGlimpse.jsx';

export default function Profile({ navigation }) {
    const [scoutData, setScoutData] = useState([
        {
            name: 'The Cyberlions',
            teamNumber: 8521,
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 1,
            drivebase: 'Swerve Drive',
            autonomous: 'Yes',
            weight: '80 pounds',
            intake: 'human and ground',
        },
    ]);

    return (
        <View style={style.container}>
            <View style={style.topPiece} />
            <View style={style.middlePiece}>
                <View style={style.basicInfo}>
                    <Text style={style.header}>{scoutData.name}</Text>
                    <Text style={style.subText}>Team {scoutData.teamNumber}</Text>
                    <Image source={scoutData.teamImage}/>
                </View>
                <View style={style.robotDetails}>
                    <Text style={style.text}>Drivebase: {scoutData.drivebase}</Text>
                    <Text style={style.text}>Autonomous: {scoutData.autonomous}</Text>
                    <Text style={style.text}>Weight: {scoutData.weight}</Text>
                    <Text style={style.text}>Intake: {scoutData.intake}</Text>
                </View>
                <View style={style.matches}>

                </View>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    },
    topPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
    },
    middlePiece: {
        width: '90%',
        maxHeight: '84%',
        paddingTop: 20,
        paddingBottom: 20,
        gap: 10,
        alignItems: 'center',
      },
    basicInfo:{

    },
    robotDetails:{
        paddingRight: '70%',
    },
    matches:{
        flexDirection: 'row',
    },
      bottomPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
      },
      text: {
        fontSize: 14,
      },
      subText: {
        fontSize: 12,
      },
});

