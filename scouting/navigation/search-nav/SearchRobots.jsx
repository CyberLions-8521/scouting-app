import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, RefreshControl, Alert } from 'react-native';
import { AntDesign } from '../../index';
import axios from 'axios';
import StatGlimpse from '../../components/home/StatGlimpse.jsx';

// navigation can be called anything. this is just a component of the Stack.screen element
export default function SearchRobots({ navigation }) {
  const [genData, setGenData] = useState([
    {
      _id: '',
      teamName: '',
      teamNumber: '',
      rank: '',
      winLossRatio: '',
    }
  ]);
  

  const axios = require('axios');

  useEffect(()=>{
    const fetchRobotList = async () => {
      try{
        const response = await axios.get('http://10.0.2.2:3000/robotList');
        setGenData(response.data);
        console.log(response.data);
      } catch(error){
        console.error('Error retrieving robotList:', error);
      };
    };


    fetchRobotList();
  }, [setGenData]);

  const displayRobotList = genData.map((robot) =>
    <View key={robot.index}>
      <StatGlimpse name={robot.teamName} teamNumber={robot.teamNumber} rank={robot.rank} winLossRatio={robot.winLossRatio} />
    </View>
  );

    return (
        <>
            <View style={styles.container}>
              <View style={styles.topPiece} />
              <View style={styles.middlePiece}>
                <Text style={styles.header}>Get Started Scouting</Text>
                <View style={styles.searchSection}>
                  <AntDesign style={styles.searchIcon}name="search1" size={25} color={'black'} />
                  <TextInput
                  style={styles.searchbar} placeholder={'Search'}
                  />
                </View>
                <View style={styles.viewScoutingData}>

                  <ScrollView>
                    <View style={styles.scoutingDataGlimpses}>
                      <Pressable onPress={()=>navigation.navigate('Profile')}>
                        {displayRobotList}
                      </Pressable>
                    </View>
                  </ScrollView>

                </View>
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
      maxHeight: '100%',
      paddingTop: 20,
      paddingBottom: 20,
      gap: 10,
      alignItems: 'center',
    },
    getStarted: {
      maxHeight: '15%',
      width: '100%',
    },
    searchSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#616161',
      borderWidth: 2.5,
    },
    searchIcon:{
      marginLeft: 50,
    },
    searchbar: {
      fontSize: 15,
      width: '100%',
      maxHeight: 40,
      paddingLeft: 10,
    },
    viewScoutingData: {
      width: '100%',
      maxHeight: '84%',
    },
    bottomPiece: {
      width: '100%',
      height: '8%',
      backgroundColor: '#E1584B',
    },
    header: {
      color: '#616161',
      textAlign: 'center',
      fontSize: 17,
      marginBottom: 10,
    },
    headerSmaller: {
      color: '#616161',
      fontSize: 14,
    },
    text: {
      color: '#616161',
      fontSize: 12,
    },
    text2: {
      color: '#616161',
      fontSize: 14.05,
    },
  });
