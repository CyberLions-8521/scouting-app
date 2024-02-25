import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '../../index';

import StatGlimpse from '../../components/home/StatGlimpse.jsx';

// navigation can be called anything. this is just a component of the Stack.screen element
export default function SearchRobots({ navigation }) {
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
                        <StatGlimpse name={'The Cyberlions'} teamNumber={8521} rank={1} winLossRatio={'3:1'} />
                      </Pressable>
                        <StatGlimpse name={'High Rollers'} teamNumber={987} rank={2} winLossRatio={'2:2'} />
                        <StatGlimpse name={'Mubotics'} teamNumber={7157} rank={3} winLossRatio={'2:2'} />
                        <StatGlimpse name={'OP Robotics'} teamNumber={2056} rank={4} winLossRatio={'1:3'} />
                        <StatGlimpse name={'Test'} teamNumber={0} rank={0} winLossRatio={'0:0'}/>
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
