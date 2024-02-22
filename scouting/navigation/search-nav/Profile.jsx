import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Entypo } from '../../index.js';

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

    const [matchData, setMatchData] = useState([
        {
            index: 1,
            matchNumber: 42,
            score: 95,
        },
        {
            index: 2,
            matchNumber: 73,
            score: 42,
        },
        {
            index: 3,
            matchNumber: 76,
            score: 110,
        },
    ]);

    return (
        <View style={style.container}>
            <View style={style.topPiece} />
            <Entypo style={style.backButton} name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
            <View style={style.middlePiece}>
                <View style={style.basicInfo}>
                    <Text style={style.header}>{scoutData.name}</Text>
                    <Text style={style.subText}>Team {scoutData.teamNumber}</Text>
                    <Image style={style.image}source={scoutData.teamImage}/>
                </View>
                <View style={style.robotDetails}>
                    <Text style={style.text}>Drivebase: {scoutData.drivebase}</Text>
                    <Text style={style.text}>Autonomous: {scoutData.autonomous}</Text>
                    <Text style={style.text}>Weight: {scoutData.weight}</Text>
                    <Text style={style.text}>Intake: {scoutData.intake}</Text>
                </View>
                <ScrollView style={style.matchSection}>
                    <Pressable onPress={()=>navigation.navigate("MatchStats")}>
                        <View style={style.matches}>
                            <Text style={style.text}>Match Number: {matchData.matchNumber}</Text>
                            <Text style={style.text}>Score: {matchData.score}</Text>
                        </View>
                    </Pressable>
                </ScrollView>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    topPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
    },
    backButton:{
        padding: 20,
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
        gap: 5,
        padding: 20,
    },
    matchSection:{
        gap: 5,
        marginLeft: 40,
        width: 385,
    },
    matches:{
        flexDirection: 'column',
        borderWidth: 2.5,
        borderColor: '#C8C8C8',
        padding: 15,
        paddingRight: 200,
        margin: 5,
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
      image: {
        flexDirection: 'row',
      },
});

