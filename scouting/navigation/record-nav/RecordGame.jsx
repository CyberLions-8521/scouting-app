import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import { Entypo } from '../../index.js';
import Counter from '../../components/record/Counter';

import axios from 'axios';

export default function RecordGame({ navigation, route: { params: { robot } } }) {

    const robotView = robot;
    const robotID = robotView.robotID;

    const matchTypeSelection = [
        { label: 'Practice Match', value: 'Practice Match' },
        { label: 'Qualification Match', value: 'Qualification Match' },
        { label: 'Playoff Match', value: 'Playoff Match' },
        { label: 'Semifinals', value: 'Semifinals' },
    ]

    const [matchType, setMatchType] = useState(null);
    const [matchNumber, setMatchNumber] = useState(null);

    const [coopertition, setCoopertition] = useState(false);
    const [harmony, setHarmony] = useState(false);
    const [climbed, setClimbed] = useState(false);

    const [teleOpSpeaker, setTeleOpSpeaker] = useState(0);
    const [autoSpeaker, setAutoSpeaker] = useState(0);
    const [teleOpAmp, setTeleOpAmp] = useState(0);

    const submitMatch = async () => {
        // This function will be used to submit the match data to the server through a POST request
        const matchData = {
            matchType,
            matchNumber,
            coopertition,
            harmony,
            climbed,
            teleOpSpeaker,
            autoSpeaker,
            teleOpAmp,
        }

        // The server will then add the match data to the database
        await axios.post(`http://10.0.2.2:3000/match/post/${robotID}`, matchData)
            .then((response) => {
                console.log(response);

                navigation.goBack();
            })
            .catch((error) => {
                console.error('Error making a POST request:', error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.topPiece} />
            <View style={styles.middlePiece}>
                <View style={styles.header}>
                    <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
                </View>
                <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.headerText}>{robotView.profile.teamName}</Text>
                            <Text style={styles.subText}>Team {robotView.profile.teamNumber}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Dropdown style={styles.dropdown} selectedTextStyle={{color: 'white', fontSize: 15 }} placeholderStyle={{color: 'white', fontSize: 15}} iconColor={'white'} value={matchType} data={matchTypeSelection} onChange={(selection) => setMatchType(selection.value)} labelField={'label'} valueField={'value'} placeholder='Match Type'/>
                        <TextInput value={matchNumber} style={styles.matchNumber} placeholder={'Match Number'} keyboardType={'numeric'} onChangeText={value => setMatchNumber(value)} />
                    </View>
                    <View style={styles.checkboxes}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox disabled={false} value={coopertition} onValueChange={(newVal) => {setCoopertition(newVal)}} tintColors={{ true: '#E1584B', false: '' }}/>
                            <Text style={styles.subText}>Coopertition</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox disabled={false} value={harmony} onValueChange={(newVal) => {setHarmony(newVal)}} tintColors={{ true: '#E1584B', false: '' }}/>
                            <Text style={styles.subText}>Harmony</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox disabled={false} value={climbed} onValueChange={(newVal) => {setClimbed(newVal)}} tintColors={{ true: '#E1584B', false: '' }}/>
                            <Text style={styles.subText}>Climbed</Text>
                        </View>
                    </View>
                    <Text style={{ marginTop: 30 }}>Add +1 for each NOTE scored below. The point value of each note will be calculated automatically</Text>
                    <View style={{ marginTop: 30, gap: 20 }}>
                        <View>
                            <Text style={styles.headerText}>Teleoperation</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.pointContainer}>
                                    <Text>Speaker</Text>
                                    <Counter target={teleOpSpeaker} setTarget={setTeleOpSpeaker} style={styles.pointInput} />
                                </View>
                                <View style={styles.pointContainer}>
                                    <Text>Amp</Text>
                                    <Counter target={teleOpAmp} setTarget={setTeleOpAmp} style={styles.pointInput} />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.headerText}>Autonomous</Text>
                            <View style={styles.pointContainer}>
                                <Text>Speaker</Text>
                                <Counter target={autoSpeaker} setTarget={setAutoSpeaker} style={styles.pointInput} />
                            </View>
                        </View>
                    </View>
                    <Pressable style={styles.submitButton} onPress={submitMatch}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </Pressable>
                </ScrollView>
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
        height: '8%',
        backgroundColor: '#E1584B',
    },
    middlePiece: {
        width: '90%',
        minHeight: '100%',
        backgroundColor: 'white',

        paddingTop: 20,
        paddingBottom: 10,
    },
    header: {
        width: '100%',
        maxHeight: 27,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 17,
        color: '#616161',
    },
    subText: {
        fontSize: 15,
        color: '#616161',
    },
    teamImage: {
        width: 200,
        height: 200,
    },
    dropdown: {
        width: '45%',
        minHeight: 50,
        marginTop: 20,
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    matchNumber: {
        width: '45%',
        fontSize: 15,
        minHeight: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 4,
        borderRadius: 10,
    },
    checkboxes: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 20,
    },
    pointInput: {
        width: 75, 
        height: 40, 
        textAlign: 'center',
        paddingHorizontal: 10, 
        borderColor: 'gray', 
        borderWidth: 4, 
        borderRadius: 30 
    },
    pointContainer: {
        width: '49%',
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'lightgray'
    },
    submitButton: {
        width: 80,
        height: 40,
        backgroundColor: '#F27468',
        marginTop: 30,
        borderRadius: 5,
        borderColor: '#E1584B',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    submitButtonText: {
        color: 'white',
        fontSize: 17,
    }
});
