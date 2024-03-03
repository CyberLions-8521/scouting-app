import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { Entypo } from '../..';
import axios from 'axios';


export default function DeleteRobot({ navigation }) {

    const tImg = '../../assets/images/robbie-transparent.png' //template image

    const [robotList, setRobotList] = useState([
      {
        name: 'Robo Tigers',
        teamNumber: '1258',
        teamImage: require(tImg),
        index: 0,
      },

      {
        name: 'Mozzarella Spheres',
        teamNumber: '9001',
        teamImage: require(tImg),
        index: 1
      },

    ]);

    //comments are just notes for myself(henry)

    const axios = require('axios'); //axios is used to make http requests

    useEffect(() => {
      const fetchData = async () => { 
        await axios.get('') //imports data using axios
          .then((response) => { //sets robotList to the data
            setRobotList(response.data)
          })
          .catch((error) => {
            console.error('Error!!! (Skill Issue TBH):', error)
          })
      }
    }, [setRobotList]); //Updates on page load and when setRobotList changes

    const removeRobot = async(item, id) => { //start of function
      axios.delete('' + item.id).then(() => { //deletes the item with the parameter id
        let newList = robotList;
        newList.forEach((item, index) => {
          if(item.id == id){
            newList.splice(index, 1); //deletes item by trying to match the two lists?
            return;
          }
        });
        setRobotList(newList);
      }) 
    }

    const displayData = robotList.map((robot) =>
      <Pressable onPress={() => removeRobot(index)}>
        <View key={robot.index} style={styles.teamSelection}>
            <View style={styles.teamName}>
                <Text>{robot.teamNumber} - {robot.name}</Text>
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
              <View style={styles.titleContainer}>
                <Pressable onPress={() => navigation.navigate('SettingsPanel')}>
                  <Entypo name='chevron-left' size={30} color='#616161'/>
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

