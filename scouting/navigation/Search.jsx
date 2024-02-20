import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';

import StatGlimpse from '../assets/components/StatGlimpse';

//topPiece - top red 'border'

export default function Search() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />
        <View style={styles.middlePiece}>
          <Text style={styles.header}>Get Started Scouting</Text>
          <View style={styles.getStarted}>
            <TextInput 
            style={styles.searchbar} placeholder='Search'
            
            />
          </View>
          <View style={styles.viewScoutingData}>
            <ScrollView>
              <View style={styles.scoutingDataGlimpses}> 
                <StatGlimpse name={'The Cyberlions'} teamNumber={8521} rank={1} winLossRatio={'3:1'} />
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
    maxHeight: '84%',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
    alignItems: 'center',
  },
  getStarted: {
    minHeight: '15%',
    width: '100%',
    gap: 10,
  },
  searchbar: {
    fontSize: 15,
    borderColor: '#616161',
    borderWidth: 2.5,
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
