import { React, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import axios from 'axios';

export default function SelectProfile({ navigation }) {

  // Wrapping the data in useState because more objects will be added to the array
  // We'll use a useEffect and update the useState when the backend is called
  const [profileData, setProfileData] = useState([]);
  
  useFocusEffect(
    useCallback(() =>  {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://10.0.2.2:3000/profile/get');
          setProfileData(response.data);
        }
        catch (error) {
          console.error('Error making a GET request:', error);
        }
      }

      fetchData();
    }, [])
  );


  // Wrap a pressable around this and navigate to the RecordGame Screen
  // When your navigate bring the object index of the robot with you to the next screen so react knows which robot to record for
  const displayData = profileData.map((robot, index) =>
    index > 0 && (
      <Pressable key={robot.robotID} onPress={() => navigation.navigate('RecordGame', { robot: robot })}>
        <View style={styles.teamSelection}>
            <View style={styles.teamName}>
              <Text>{robot.profile.teamName}</Text>
              <Text>{robot.profile.teamNumber}</Text>
            </View>
        </View>
      </Pressable>
    )
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
    borderColor: 'lightgrey',
    borderWidth: 2.5,
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