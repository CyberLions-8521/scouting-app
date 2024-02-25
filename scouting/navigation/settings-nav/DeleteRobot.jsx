import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Entypo } from '../..';


export default function DeleteRobot({ navigation }) {

    const [scoutData, setScoutData] = useState([
        {
          name: 'The Cyberlions',
          teamNumber: 8521,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 0
        },
        {
          name: 'High Rollers',
          teamNumber: 987,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 1
        },
        {
          name: 'Mubotics',
          teamNumber: 7157,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 2
        },
        {
          name: 'OP Robotics',
          teamNumber: 2056,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 3
        },
        {
          name: 'RoboLancers',
          teamNumber: 321,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 4
        },
        {
          name: 'Bionic Black Hawks',
          teamNumber: 2834,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 5
        },
        {
          name: 'The Holy Cows',
          teamNumber: 1538,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 6
        },
        {
          name: 'Simbotics',
          teamNumber: 1114,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 7
        },
        {
          name: 'The Cheesy Poofs',
          teamNumber: 254,
          teamImage: require('../../assets/images/robbie-transparent.png'),
          index: 8
        },
      ]);

    const displayData = scoutData.map((robot) =>
        <View key={robot.index} style={styles.teamSelection}>
            <View style={styles.teamName}>
                <Text>{robot.teamNumber} - {robot.name}</Text>
            </View>
            <Image source={robot.teamImage} style={styles.teamImage} />
        </View>
    );


    return (
    <>
          <View style={styles.container}>
            <View style={styles.topPiece} />
            <View style={styles.middlePiece}>
              <View style={styles.titleContainer}>
                <Pressable onPress={() => navigation.navigate('SettingsPanel')}>
                  <Entypo name='chevron-left' size={30} color='#616161'/>
                </Pressable>
                <Text style={styles.title}>Select Robot to Delete</Text>
              </View>

              <Text style={styles.subText}>This action CANNOT BE UNDONE. DO NOT CLICK PROFILES YOU DO NOT WANT TO DELETE.</Text>

              {displayData}

            </View>
          </View>
    </>
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
      maxHeight: '84%',
      backgroundColor: 'white',

      paddingTop: 20,
      paddingBottom: 20,
      gap: 30,
      alignItems: 'center',
    },

    titleContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap:10,
    },

    title: {
      fontSize: 17,
      color: '#616161',
    },

    subText: {
      color: '#616161',
      textAlign: 'center',
      width: '100%',
    },

    button: {
      width:'90%',
      height:'7%',
      backgroundColor: '#E1584B',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      fontSize: 20,
      color: 'white',
    },

    viewSelection: {
    width: '100%',
    maxHeight: '71%',
    },

    teamSelection: {
        width: '100%',
        minHeight: 70,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#616161',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    teamName: {
        minHeight: 50,
    },

    teamImage: {
        width: 50,
        height: 50,
    },
  }
);

