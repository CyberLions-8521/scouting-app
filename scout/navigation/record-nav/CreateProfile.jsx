import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import { Entypo } from '../../index.js';

import axios from 'axios';

export default function CreateProfile({ navigation }) {

    const [teamName, setTeamName] = useState('');

    const [teamNumber, setTeamNumber] = useState();

    const drivebaseSelection = [
        { label: 'Mecanum', value: 'Mecanum' },
        { label: 'Tank', value: 'Tank' },
        { label: 'Swerve', value: 'Swerve' },
        { label: 'H-Drive', value: 'H-Drive' },
        { label: 'Other', value: 'Other' },
    ];
    const [drivebase, setDrivebase] = useState('');
    const [drivebaseDropdown, setDrivebaseDropdown] = useState('');

    const [autonomous, setAutonomous] = useState(false);

    const intakeSelection = [
        { label: 'Over', value: 'Over' },
        { label: 'Under', value: 'Under' },
        { label: 'Other', value: 'Other' },
    ];
    const [intake, setIntake] = useState('');
    const [intakeDropdown, setIntakeDropdown] = useState('');

    const [additionalDetails, setAdditionalDetails] = useState('');

    const submitProfile = async () => {
        // This function will be used to submit the robot profile to the server through a POST request
        const profileData = {
            profile: {
                teamName,
                teamNumber,
                drivebase,
                autonomous,
                intake,
                additionalDetails,
            },
            matches: [],
        };

        // The server will then add the robot profile to the database
        try {

            // quickly convert everything that needs to be an integer to an integer
            profileData.profile.teamNumber = Number(teamNumber);

            // the profile data should be in an object called profile
            await axios.post('http://bckend.team8521.com/addProfile', profileData);
        }
        catch (error) {
            console.error('Error making a POST request:', error);
        }

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.topPiece} />
            <View style={styles.middlePiece}>
                <View style={styles.header}>
                    <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerText}>Create Robot Profile</Text>
                    <Pressable style={styles.submitButton} onPress={submitProfile}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
                    <Text style={styles.headerText}>General Information</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.inputContainer}>
                            <View>
                                <TextInput value={teamName} style={styles.bigInput} placeholder={'Team Name'} onChangeText={value => setTeamName(value)}/>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput value={teamNumber} style={styles.smallInput} placeholder={'Team Number'} keyboardType={'numeric'} onChangeText={value => setTeamNumber(value)}/>
                            </View>
                            <View style={{marginTop: 10}}>
                                <Text style={styles.headerText}>Drivebase</Text>
                                <Dropdown style={styles.dropdown} selectedTextStyle={{color: 'white', fontSize: 15 }} placeholderStyle={{color: 'white', fontSize: 15}} iconColor={'white'} value={drivebaseDropdown} data={drivebaseSelection} 
                                onChange={(selection) => {
                                    setDrivebaseDropdown(selection.value);
                                    setDrivebase(selection.value);
                                }}
                                    labelField={'label'}
                                    valueField={'value'}
                                    placeholder={'Drivebase'}
                                />

                                {/*This ternary operator allows for manual input of drivebase if selected 'Other'*/}
                                {drivebaseDropdown === 'Other' ? <TextInput style={styles.bigInput} placeholder={'Other Drivebase'} onChangeText={value => setDrivebase(value)}/> : <></>}
                            </View>
                            <View style={{marginTop: 10}}>
                                <Text style={styles.headerText}>Intake</Text>
                                <Dropdown style={styles.dropdown} selectedTextStyle={{color: 'white', fontSize: 15 }} placeholderStyle={{color: 'white', fontSize: 15}} iconColor={'white'} value={intakeDropdown} data={intakeSelection} onChange={(selection) => {setIntakeDropdown(selection.value); setIntake(selection.value)}} labelField={'label'} valueField={'value'} placeholder={'Intake'} />

                                {intakeDropdown === 'Other' ? <TextInput style={styles.bigInput} placeholder={'Other Intake'} onChangeText={value => setIntake(value)}/> : <></>}
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                                    <CheckBox disabled={false} value={autonomous} onValueChange={(newVal) => {setAutonomous(newVal)}} tintColors={{ true: '#E1584B', false: '' }}/>
                                    <Text style={styles.subText}>Autonomous</Text>
                                </View>
                            </View>
                        </View>
                        {/*This is where image would go*/}
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.headerText}>Additional Details</Text>
                        <TextInput value={additionalDetails} style={styles.detailInput} multiline={true} onChangeText={value => setAdditionalDetails(value)}/>
                    </View>
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
        paddingBottom: 20,
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
    submitButton: {
        width: 80,
        height: 40,
        backgroundColor: '#F27468',
        borderRadius: 5,
        borderColor: '#E1584B',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 17,
    },
    inputContainer: {
        width: '75%',
        minHeight: '30%',
    },
    bigInput: {
        width: '100%',
        fontSize: 15,
        minHeight: 50,
        marginTop: 10,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
    },
    smallInput: {
        width: '48%',
        fontSize: 15,
        minHeight: 50,
        marginTop: 10,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
    },
    dropdown: {
        width: '100%',
        minHeight: 50,
        backgroundColor: 'gray',
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    smallDropdown: {
        width: '50%',
        minHeight: 50,
        backgroundColor: 'gray',
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    teamImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
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
