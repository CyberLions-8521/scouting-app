import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import axios from 'axios';

import { Entypo } from '../../index.js';

export default function MatchStats({ navigation }) {

    const [scoutData, setScoutData] = useState([
        {
            index: 1,
            name: 'The Cyberlions',
            teamNumber: 8521,
            score: 78,
            matchType: 'Qualifiers',
            matchNum: 1,
            teleopScore: 60,
            autonomousScore: 14,
            mounted:'Yes',
            keynote:'Yes',
            harmony: 'Yes',
            teamImage: require('../../assets/images/robbie-transparent.png'),
        },
    ]);

    return (
        
        <>
            <View style={s.topPiece} />

            <View style={s.container}>

            <View style={s.buttonPiece}>
                <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
            </View>

                <View style={s.teamMain}>
                    <View style={s.teamNameNum}>
                        <Text style={s.header}>{scoutData.name}</Text>
                        <Text style={s.subHeader}>{scoutData.teamNumber}</Text>
                    </View>
                    <Image style={s.image} source={require('../../assets/interface-icons/filler-image.png')} />
                </View>

                <View style={s.teamDesc}>
                    <Text style={s.teamDescText}>Match Number: {scoutData.matchNum}</Text>
                    <Text style={s.teamDescText}>Score: {scoutData.score}</Text>
                    <Text style={s.teamDescText}>Match Type: {scoutData.matchType}</Text>
                    <Text style={s.teamDescText} />

                    <Text style={s.teamDescText}>Teleop Score: {scoutData.teleopScore}</Text>
                    <Text style={s.teamDescText}>Autonomous Score: {scoutData.autonomousScore}</Text>
                    <Text style={s.teamDescText} />

                    <Text style={s.teamDescText}>Mounted: {scoutData.mounted}</Text>
                    <Text style={s.teamDescText}>Keynote: {scoutData.keynote}</Text>
                    <Text style={s.teamDescText}>Harmony with others: {scoutData.harmony}</Text>
                    <Text style={s.teamDescText} />
                </View>
            </View>
        </>
    );
}

const s = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',

        display: 'flex',
        flexDirection: 'column'
    },

    topPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
    },

    buttonPiece: {
        width: '100%',
        marginLeft: 20,
        marginTop: 20,
    },

    teamMain: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
        width: '90%',

        alignItems: 'center',
        justifyContent: 'center',
    },

    teamNameNum: {
        display: 'flex',
        flexDirection: 'column',
        width: '45%',
        height: 100,
    },

    header: {
        fontSize: 20,
    },

    subHeader: {
        fontSize: 12,
    },

    image: {
        width: '55%',
        height: 100,
    },

    teamDesc: {
        margin: 20,
        gap: 5,
        minHeight: '60%',
    },

    teamDescText: {
        fontSize: 14,
    }
});
