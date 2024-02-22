import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

import { Entypo } from '../../index.js';

export default function MatchStats({ navigation }) {

    const [scoutData, setScoutData] = useState([
        {
            index: 1,
            name: 'The Cyberlions',
            teamNumber: 8521,
            score: 78,
            matchType: 'Qualifiers',
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
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <Entypo name={'chevron-left'} size={42} color={'#616161'} />
                </Pressable>

                <View style={s.teamMain}>
                    <View style={s.teamNameNum}>
                        <Text style={s.header}>High Rollers</Text>
                        <Text style={s.subHeader}>Team 987</Text>
                    </View>
                    <Image style={s.image} source={require('../../assets/interface-icons/filler-image.png')} />
                </View>

                <View style={s.teamDesc}>
                    <Text style={s.teamDescText}>Match Number: 29</Text>
                    <Text style={s.teamDescText}>Score: 78</Text>
                    <Text style={s.teamDescText}>Match Type: Qualifiers</Text>
                    <Text style={s.teamDescText} />

                    <Text style={s.teamDescText}>Teleop Score: 72</Text>
                    <Text style={s.teamDescText}>Autonomous Score: 12</Text>
                    <Text style={s.teamDescText} />

                    <Text style={s.teamDescText}>Mounted: Yes</Text>
                    <Text style={s.teamDescText}>Keynote: Yes</Text>
                    <Text style={s.teamDescText}>Harmony with others: Yes</Text>
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
        flexDirection: 'column',



    },
    topPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
    },


    teamMain: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
        gap: 20,

        alignItems: 'center',
        justifyContent: 'center',
    },

    teamNameNum: {
        display: 'flex',
        flexDirection: 'column',
        width: '45%',
        height: 120,
    },

    header: {
        fontSize: 20,
    },

    subHeader: {
        fontSize: 17,
    },

    image: {
        width: '45%',
        height: 120,
    },

    teamDesc: {
        margin: 20,
        minHeight: '60%',
    },

    teamDescText: {
        fontSize: 15,
        lineHeight: 30,
    }
});
