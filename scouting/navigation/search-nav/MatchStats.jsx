import React from 'react';
import { View, Text, Entypo } from 'react-native';

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
        <View style={s.container}>
            <View style={s.topPiece} />
            <Entypo name='chevron-left' size={42} color='#616161'/>

            <View style={s.teamMain}>
                <View style={s.teamNameNum}>
                    <Text style={s.header}>TEST</Text>
                    <Text style={s.subHeader}>SUBTEST</Text>
                </View>
                <Image source={scoutData.teamImage[1]}/>
            </View>

        </View>
    );
}

const s = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    
    topPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
    },


    teamMain: {
        display: 'flex',
        flexDirection: 'row',
    },

    teamNameNum: {
        display: 'flex',
        flexDirection: 'row',
    },
      
    header: {
        fontSize: 20,
    },

    subHeader: {
        fontSize: 14,
    }
    
})