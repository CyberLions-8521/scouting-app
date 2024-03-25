import React, { Suspense, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import DeleteRobotSkeleton from '../../components/settings/DeleteRobotSkeleton';
import { Entypo } from '../..';
import axios from 'axios';

export default function DeleteRobot({ navigation }) {

    const tImg = require('../../assets/images/robbie-transparent.png'); //template image

    const [robotList, setRobotList] = useState([]);

    useEffect(() => {
      axios.get('http://10.0.2.2:3000/robotList') //imports data using axios
        .then((response) => { //sets robotList to the data
          setRobotList(response.data);
        })
        .catch((error) => {
          console.error(error);
    });

    }, [setRobotList]); //Updates on page load and when setRobotList changes

    const removeRobot = async (teamNumber) => {
      // remove robot from robotList and update list on screen
      await axios.get(`http://10.0.2.2:3000/removeRobot/${teamNumber}`);
        let newList = await axios.get('http://10.0.2.2:3000/robotList');
        setRobotList((prev) => newList.data);
    };

    //epic notes
    //robotList's length is 0 before it loads in
    //the skeleton is displayed with ? (truthy vs falsy)

    const displayData = robotList.length > 0 ? (
      robotList.map((robot) =>
          <Pressable onPress={() => removeRobot(robot.profile.teamNumber)}>
            <View key={robot.robotID} style={styles.teamSelection}>
              <View style={styles.teamName}>
                <Text>{robot.profile.teamNumber} - {robot.profile.teamName}</Text>
              </View>
              <Image source={tImg} style={styles.teamImage} />
            </View>
          </Pressable>
      )
    ) : (
      <DeleteRobotSkeleton/>
    );

    return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />
        <View style={styles.middlePiece}>
          <View style={styles.titleContainer}>
            <Pressable onPress={() => navigation.navigate('SettingsPanel')}>
              <Entypo name={'chevron-left'} size={30} color={'#616161'} />
            </Pressable>
            <Text style={styles.title}>Select Robot to Delete</Text>
          </View>

          <Text style={styles.subText}>This action CANNOT BE UNDONE. DO NOT CLICK PROFILES YOU DO NOT WANT TO DELETE.</Text>

          <ScrollView style={styles.robotListContainer}>
              {displayData}
          </ScrollView>

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
      alignItems: 'center',
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
      marginBottom: '5%',
    },
    teamName: {
      minHeight: 50,
    },
    teamImage: {
      width: 50,
      height: 50,
    },
    robotListContainer: {
      width:'100%',
    },
  }
);

