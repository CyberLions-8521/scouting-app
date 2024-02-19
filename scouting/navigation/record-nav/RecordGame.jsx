import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

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
        <View>
            <Button onPress={() => navigation.navigate('SelectProfile')} title="Go Back" />
            <Text>Record Game</Text>
            <Text>{robotView.name}</Text>
            <Image source={robotView.teamImage} />
        </View>
    );
}
