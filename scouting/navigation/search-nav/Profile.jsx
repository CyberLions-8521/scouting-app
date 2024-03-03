import { React, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Entypo } from '../../index.js';
import axios from 'axios';

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
        <View style={styles.container}>
            <View style={styles.topPiece} />

            <View style={styles.buttonPiece}>
                <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.middlePieceContainer}>
                <View style={styles.middlePiece}>

                    <View style={styles.teamMain}>
                        <View style={styles.teamSubMain}>
                            <Text style={styles.header}>{scoutData.name}</Text>
                            <Text style={styles.subText}>{scoutData.teamNumber}{scoutData.teamNumber}</Text>
                        </View>

                        <Image style={styles.image}source={require('../../assets/interface-icons/filler-image.png')}/>
                    </View>

                    <View style={styles.robotDetails}>
                        <Text style={styles.text}>Drivebase: {scoutData.drivebase}</Text>
                        <Text style={styles.text}>Autonomous: {scoutData.autonomous}</Text>
                        <Text style={styles.text}>Weight: {scoutData.weight}</Text>
                        <Text style={styles.text}>Intake: {scoutData.intake}</Text>
                        <Text style={styles.text}>Additional Details:</Text>
                    </View>

                    <ScrollView style={styles.matchSection}>
                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {matchData.matchNumber}</Text>
                                <Text style={styles.text}>Score: {matchData.score}</Text>
                            </View>
                        </Pressable>
                    </ScrollView>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      gap: 20,
      backgroundColor: 'white',
    },
    topPiece: {
      height: '8%',
      backgroundColor: '#E1584B',
    },
    buttonPiece: {
      width: '100%',
      marginLeft: 20,
    },
    middlePieceContainer: {
      width: '100%',
      alignItems: 'center',
      maxHeight: '93.5%',
    },
    middlePiece: {
      width: '90%',
      gap: 20,
    },
    teamMain: {
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'space-between',
      maxHeight: 150,
    },
    image: {
      maxWidth: 200,
      maxHeight: 100,
    },
    robotDetails:{
      gap: 5,
    },
    matchSection:{
      gap: 100,
    },
    matches:{
      flexDirection: 'column',
      borderWidth: 2.5,
      borderColor: '#C8C8C8',
      padding: 15,
      paddingRight: 200,

      marginTop: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 14,
      width: '100%',
    },
    subText: {
      fontSize: 12,
    },
    header: {
      fontSize: 20,
    },
});

