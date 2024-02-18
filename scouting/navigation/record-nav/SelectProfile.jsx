import { React, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';


// This will be where most of the post requests will happen. People will record data here
export default function SelectProfile({ navigation }) {

  const [scoutData, setScoutData] = useState([
    {
      teamName: 'The Cyberlions (8521)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 1,
    },
    {
      teamName: 'High Rollers (987)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 2,
    },
    {
      teamName: 'Mubotics (7157)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 3,
    },
    {
      teamName: 'OP Robotics (2056)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 4,
    },
    {
      teamName: 'RoboLancers (321)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 5,
    },
    {
      teamName: 'Bionic Black Hawks (2834)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 6,
    },
    {
      teamName: 'The Holy Cows (1538)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 7,
    },
    {
      teamName: 'Simbotics (1114)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 8,
    },
    {
      teamName: 'The Cheesy Poofs (254)',
      teamImage: require('../../assets/images/robbie-transparent.png'),
      key: 9,
    },
  ]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />
        <View style={styles.middlePiece}>
          <Text style={styles.header}>Select Robot to Scout</Text>
          <ScrollView style={styles.viewSelection}>
            {scoutData.map((data) => {
              return (
                <View key={data.key} style={styles.teamSelection}>
                  <View style={styles.teamName}>
                    <Text>{data.teamName}</Text>
                  </View>
                  <Image source={data.teamImage} style={styles.teamImage} />
                </View>
              );
            })}
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