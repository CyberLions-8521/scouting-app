import { React, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Entypo } from '../../index.js';
import axios from 'axios';

export default function Profile({ route, navigation }) {
    const [scoutData, setScoutData] = useState();

    // we are destructuring the teamNumber key from the route.params object
    const { teamNumber } = route.params;

    useEffect(() => {
        axios.get(`http://10.0.2.2:3000/getRobot/${teamNumber}}`)
        .then((response) => {
            setScoutData(response.data);
        });
    }, [teamNumber]);

    return (
        <View style={styles.container}>
            <View style={styles.topPiece} />

            <View style={styles.buttonPiece}>
                <Entypo name={'chevron-left'} size={30} color={'#616161'} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.middlePieceContainer}>
                <View style={styles.middlePiece}>

                {scoutData && <>
                    <View style={styles.teamMain}>
                        <View style={styles.teamSubMain}>
                            <Text style={styles.header}>{scoutData.profile.teamName}</Text>
                            <Text style={styles.subText}>{scoutData.profile.teamNumber}</Text>
                        </View>

                        <Image style={styles.image}source={require('../../assets/interface-icons/filler-image.png')}/>
                    </View>

                    <View style={styles.robotDetails}>
                        <Text style={styles.text}>Drivebase: {scoutData.profile.driveBase}</Text>
                        <Text style={styles.text}>Autonomous: {scoutData.profile.autonomous.toString()}</Text>
                        <Text style={styles.text}>Intake: {scoutData.profile.intake}</Text>
                        <Text style={styles.text}>Additional Details: {scoutData.profile.additionalDetails}</Text>
                    </View>
                    </>
                    }

                    <ScrollView style={styles.matchSection}>
                        <Pressable onPress={()=>navigation.navigate('MatchStats')}>
                            <View style={styles.matches}>
                                <Text style={styles.text}>Match Number: {'5'}</Text>
                                <Text style={styles.text}>Score: {'5'}</Text>
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
      maxWidth: '55%',
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

