import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Entypo } from '../..';

export default function RecordGame({ navigation, route: { params: { robotIndex } } }) {

    
    const [scoutData, setScoutData] = useState([
        {
            name: 'The Cyberlions',
            teamNumber: 8521,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 1,
        },
        {
            name: 'High Rollers',
            teamNumber: 987,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 2,
        },
        {
            name: 'Mubotics',
            teamNumber: 7157,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 3,
        },
        {
            name: 'OP Robotics',
            teamNumber: 2056,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 4,
        },
        {
            name: 'RoboLancers',
            teamNumber: 321,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 5,
        },
        {
            name: 'Bionic Black Hawks',
            teamNumber: 2834,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 6,
        },
        {
            name: 'The Holy Cows',
            teamNumber: 1538,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 7,
        },
        {
            name: 'Simbotics',
            teamNumber: 1114,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 8,
        },
        {
            name: 'The Cheesy Poofs',
            teamNumber: 254,
            rank: 1,
            winLossRatio: '3:1',
            teamImage: require('../../assets/images/robbie-transparent.png'),
            index: 9,
        },
    ]);
    
    const [robotView, setRobotView] = useState(
        scoutData[robotIndex]
    );

    return (
        <View style={styles.container}>
            <View style={styles.topPiece} />
            <View style={styles.middlePiece}>
                <View style={styles.header}>
                    <Entypo name='chevron-left' size={30} color='#616161' onPress={() => navigation.goBack()} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.headerText}>{robotView.name}</Text>
                        <Text style={styles.subText}>Team {robotView.teamNumber}</Text>
                    </View>
                    <Image style={styles.teamImage} source={robotView.teamImage} />
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
    });
