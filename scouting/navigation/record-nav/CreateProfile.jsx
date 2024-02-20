import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { Entypo } from '../../index.js';

export default function CreateProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topPiece} />
            <View style={styles.middlePiece}>
                <View style={styles.header}>
                    <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerText}>Create Robot Profile</Text>
                    <Pressable style={styles.submitButton} onPress={() => navigation.goBack() }>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.inputContainer}>
                        <View>
                            <TextInput style={styles.bigInput} placeholder={'Team Name'} />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput style={styles.smallInput} placeholder={'Team Number'} keyboardType={'numeric'} />
                            <TextInput style={styles.smallInput} placeholder={'Weight'} keyboardType={'numeric'} />
                        </View>
                        <View>
                            <TextInput style={styles.bigInput} placeholder={'Drivebase'} />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput style={styles.smallInput} placeholder={'Autonomous'}/>
                            <TextInput style={styles.smallInput} placeholder={'Intake'} />
                        </View>
                    </View>
                    <Image style={styles.teamImage} source={require('../../assets/images/robbie-transparent.png')} />
                </View>
                <View>
                    <TextInput style={styles.detailInput} placeholder={'Additional Details'} multiline={true}/>
                </View>
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
        minHeight: '100%',
        color: '#616161',
        fontSize: 17,
    },
    submitButton: {
        width: 80,
        maxHeight: 30,
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
        width: '50%',
        minHeight: '30%',
    },
    bigInput: {
        fontSize: 10,
        width: '100%',
        maxHeight: 40,
        borderColor: '#616161',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    smallInput: {
        fontSize: 10,
        width: '48%',
        maxHeight: 40,
        borderColor: '#616161',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    teamImage: {
        width: '50%',
        height: '100%',
    },
    detailInput: {
        fontSize: 10,
        width: '100%',
        minHeight: 100,
        maxHeight: 350,
        borderColor: '#616161',
        borderWidth: 1,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
    },
  });
