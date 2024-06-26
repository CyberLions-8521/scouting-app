import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

import { Entypo } from '../../index.js';

export default function MatchStats({ route, navigation }) {

    const [robotProfileData, setRobotProfileData] = useState();
    const [robotMatchData, setRobotMatchData] = useState();
    const { teamNumber, matchNumber } = route.params;

    useEffect(() => {
        axios.get(`http://10.0.2.2:3000/getRobot/${teamNumber}}`)
        .then((response) => {
            setRobotProfileData(response.data);
        });

        axios.get(`http://10.0.2.2:3000/getMatch/${teamNumber}/${matchNumber}`)
        .then((response) => {
            setRobotMatchData(response.data);
        });
    });

    return (

        <>
            <View style={s.topPiece} />
            <View style={s.container}>

            <View style={s.buttonPiece}>
                <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
            </View>

            {robotMatchData &&
                <>
                    <View style={s.teamMain}>
                        <View style={s.teamNameNum}>
                            <Text style={s.header}>{robotProfileData.profile.teamName}</Text>
                            <Text style={s.subHeader}>{robotProfileData.profile.teamNumber}</Text>
                        </View>
                        <Image style={s.image} source={require('../../assets/interface-icons/filler-image.png')} />
                    </View>

                    <View style={s.teamDesc}>

                        <Text style={s.teamDescText}>Match Number: {robotMatchData.matchNumber}</Text>
                        <Text style={s.teamDescText}>Match Type: {robotMatchData.matchType}</Text>

                        <Text style={s.teamDescText}>Teleop Amp Count: {robotMatchData.teleOpAmp}</Text>
                        <Text style={s.teamDescText}>Teleop Speaker Count: {robotMatchData.teleOpSpeaker}</Text>

                        <Text style={s.teamDescText}>Autonomous Amp Count: {robotMatchData.autoAmp}</Text>
                        <Text style={s.teamDescText}>Autonomous Speaker Count: {robotMatchData.autoSpeaker}</Text>

                        <Text style={s.teamDescText}>Climbed: {robotMatchData.climbed.toString()}</Text>
                        <Text style={s.teamDescText}>Coopertition: {robotMatchData.coopertition.toString()}</Text>
                        <Text style={s.teamDescText}>High Note: {robotMatchData.highNote.toString()}</Text>
                    </View>
                </>
            }
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
    },
});
