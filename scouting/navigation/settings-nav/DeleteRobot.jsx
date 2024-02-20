import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function DeleteRobot({ navigation }) {


    const [scoutData, setScoutData] = useState([
        {
          name: 'The Cyberlions',
          teamNumber: 8521,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'High Rollers',
          teamNumber: 987,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'Mubotics',
          teamNumber: 7157,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'OP Robotics',
          teamNumber: 2056,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'RoboLancers',
          teamNumber: 321,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'Bionic Black Hawks',
          teamNumber: 2834,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'The Holy Cows',
          teamNumber: 1538,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'Simbotics',
          teamNumber: 1114,
          teamImage: require('../../assets/images/robbie-transparent.png'),
        },
        {
          name: 'The Cheesy Poofs',
          teamNumber: 254,
          teamImage: require('../../assets/images/robbie-transparent.png'),
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
          <View style={styles.topPiece} />
          <View style={styles.container}>

            <View style={styles.titleContainer}>
              <Pressable onPress={() => navigation.navigate('SettingsPanel')}>
                <Text style={[styles.title, {fontWeight:'bold'}]}>{'<'}</Text>
              </Pressable>
              <Text style={styles.title}>Select Robot to Delete</Text>
            </View>

            <Text style={styles.normalText}>This action CANNOT BE UNDONE. DO NOT CLICK PROFILES YOU DO NOT WANT TO DELETE.</Text>
            
            {displayData}

          </View>
    </>
    );
}


const styles = StyleSheet.create({

    topPiece: {
      width: '100%',
      height: '8%',
      backgroundColor: '#E1584B',
    },

    container: {
      width: '100%',
      height: '100%',
      padding: 10,
      paddingHorizontal: 20,
      backgroundColor: 'white',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      gap: 20
    },

    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap:10
    },

    title: {
      fontSize: 30,
    },

    header: {
      fontSize: 22,
      fontWeight: 'bold',
    },

    normalText: {
      fontSize:20,
    },

    button: {
      width:'90%',
      height:'7%',
      backgroundColor: '#E1584B',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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

