import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Entypo } from '../../index.js';
import Counter from '../../components/record/Counter';
import CheckRecord from '../../components/record/CheckRecord.jsx';

import axios from 'axios';

export default function RecordGame({ route, navigation }) {

    const { robot } = route.params;
    const robotTeamNumber = robot.profile.teamNumber;

    const matchTypeSelection = [
        { label: 'Practice Match', value: 'Practice Match' },
        { label: 'Qualification Match', value: 'Qualification Match' },
        { label: 'Playoff Match', value: 'Playoff Match' },
        { label: 'Semifinals', value: 'Semifinals' },
    ];

    const [matchType, setMatchType] = useState(null);
    const [matchNumber, setMatchNumber] = useState(null);

    const [coopertition, setCoopertition] = useState(false);
    const [highNote, setHighNote] = useState(false);
    const [climbed, setClimbed] = useState(false);
    const [trap, setTrap] = useState(false);

    const [teleOpSpeaker, setTeleOpSpeaker] = useState(0);
    const [teleOpAmp, setTeleOpAmp] = useState(0);
    const [autoSpeaker, setAutoSpeaker] = useState(0);
    const [autoAmp, setAutoAmp] = useState(0);

    const [comment, setComment] = useState('');

    const submitMatch = async () => {
        // This function will be used to submit the match data to the server through a POST request
        const matchData = {
            matchType,
            matchNumber,
            coopertition,
            highNote,
            climbed,
            teleOpSpeaker,
            teleOpAmp,
            autoSpeaker,
            autoAmp,
            comment,
        };

        // The server will then add the match data to the database
        try {

            // quickly convert everything that needs to be an integer to an integer
            matchData.matchNumber = Number(matchNumber);

            axios.post(`http://bckend.team8521.com/addMatch/${robotTeamNumber}`, matchData);
        }
        catch (error) {
            console .error('Error making a POST request:', error);
        }

        navigation.goBack();
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
                            <Text style={styles.headerText}>{robot.profile.teamName}</Text>
                            <Text style={styles.subText}>Team {robot.profile.teamNumber}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Dropdown style={styles.dropdown} selectedTextStyle={{color: 'white', fontSize: 15 }} placeholderStyle={{color: 'white', fontSize: 15}} iconColor={'white'} value={matchType} data={matchTypeSelection} onChange={(selection) => setMatchType(selection.value)} labelField={'label'} valueField={'value'} placeholder={'Match Type'} />
                        <TextInput value={matchNumber} style={styles.matchNumber} placeholder={'Match Number'} keyboardType={'numeric'} onChangeText={value => setMatchNumber(value)} />
                    </View>
                    <View style={styles.checkboxes}>
                        <CheckRecord checkboxTitle={'Cooperition'} stateValue={coopertition} changeState={setCoopertition} />
                        <CheckRecord checkboxTitle={'High Note'} stateValue={highNote} changeState={setHighNote} />
                        <CheckRecord checkboxTitle={'Climbed'} stateValue={climbed} changeState={setClimbed} />
                        <CheckRecord checkboxTitle={'Trap'} stateValue={trap} changeState={setTrap} />
                    </View>
                    <Text style={{ marginTop: 30 }}>Add +1 for each NOTE scored. Ex: robot puts 1 note in AMP</Text>
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
                            <Text style={styles.headerText}>Autonomous</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.pointContainer}>
                                    <Text>Speaker</Text>
                                    <Counter target={autoSpeaker} setTarget={setAutoSpeaker} style={styles.pointInput} />
                                </View>
                                <View style={styles.pointContainer}>
                                    <Text>Amp</Text>
                                    <Counter target={autoAmp} setTarget={setAutoAmp} style={styles.pointInput} />
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={styles.headerText}>Additional Comments</Text>
                            <TextInput value={comment} style={styles.detailInput} multiline={true} onChangeText={value => setComment(value)}/>
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
        borderRadius: 30,
    },
    pointContainer: {
        width: '49%',
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'lightgray',
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
        alignSelf: 'flex-end',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 17,
    },
    detailInput: {
        width: '100%',
        fontSize: 15,
        minHeight: 100,
        maxHeight: 200,
        marginTop: 10,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        textAlignVertical: 'top',
    },
});
