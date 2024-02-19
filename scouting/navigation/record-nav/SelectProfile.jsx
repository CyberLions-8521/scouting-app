import { React, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';


// This will be where most of the post requests will happen. People will record data here
export default function SelectProfile({ navigation }) {

  // Wrapping the data in useState because more objects will be added to the array
  // We'll use a useEffect and update the useState when the backend is called
  const [scoutData, setScoutData] = useState([
    {
      name: 'The Cyberlions',
      teamNumber: 8521,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 0,
    },
    {
      name: 'High Rollers',
      teamNumber: 987,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 1,
    },
    {
      name: 'Mubotics',
      teamNumber: 7157,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 2,
    },
    {
      name: 'OP Robotics',
      teamNumber: 2056,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 3,
    },
    {
      name: 'RoboLancers',
      teamNumber: 321,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 4,
    },
    {
      name: 'Bionic Black Hawks',
      teamNumber: 2834,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 5,
    },
    {
      name: 'The Holy Cows',
      teamNumber: 1538,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 6,
    },
    {
      name: 'Simbotics',
      teamNumber: 1114,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 7,
    },
    {
      name: 'The Cheesy Poofs',
      teamNumber: 254,
      rank: 1,
      winLossRatio: '3:1',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      index: 8,
    },
  ]);

  // Wrap a pressable around this and navigate to the RecordGame Screen
  // When your navigate bring the object index of the robot with you to the next screen so react knows which robot to record for
  const displayData = scoutData.map((robot) =>
    <Pressable onPress={() => navigation.navigate('RecordGame', { robotIndex: robot.index })}>  
      <View key={robot.index} style={styles.teamSelection}>
          <View style={styles.teamName}>
            <Text>{robot.name}</Text>
          </View>
          <Image source={robot.teamImage} style={styles.teamImage} />
      </View>
    </Pressable>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />
        <View style={styles.middlePiece}>
          <Text style={styles.header}>Select Robot to Scout</Text>
          <ScrollView style={styles.viewSelection}>

            {displayData}

          </ScrollView>
          <Pressable style={styles.createButton} onPress={() => navigation.navigate('CreateProfile')}>
            <Text style={styles.createButtonText}>Create New Robot Profile</Text>
          </Pressable>
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
    minHeight: '100%',
    backgroundColor: 'white',

    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    width: '100%',
    minHeight: '6%',
    color: '#616161',
    fontSize: 17,
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
  createButton: {
    width: '60%',
    minHeight: '8%',
    backgroundColor: '#F27468',
    borderRadius: 5,
    borderColor: '#E1584B',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: 'white',
    fontSize: 17,
  },
});