import React from 'react';
import { View, Text, StyleSheet, Image, Suspense } from 'react-native';

import StatGlimpse from '../components/home/StatGlimpse.jsx';
import Information from '../components/home/Information.jsx';

export default function Home({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />

        <View style={styles.middlePiece}>

          <View style={styles.getStarted}>
            <Text style={styles.header}>Get Started Scouting</Text>
            <Information />
          </View>

          <View style={styles.viewScoutingData}>
            <Text style={styles.header}>View Scouting Data</Text>
            <View style={styles.scoutingDataGlimpses}>
              <StatGlimpse name={'The Cyberlions'} teamNumber={8521} rank={1} winLossRatio={'3:1'} />
              <StatGlimpse name={'High Rollers'} teamNumber={987} rank={2} winLossRatio={'2:2'} />
              <StatGlimpse name={'Mubotics'} teamNumber={7157} rank={3} winLossRatio={'2:2'} />
              <StatGlimpse name={'OP Robotics'} teamNumber={2056} rank={4} winLossRatio={'1:3'} />
            </View>
          </View>

          <Text style={styles.text2}>For more information of all teams, click on the search icon</Text>

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
  getStarted: {
    minHeight: '15%',
    width: '100%',
    gap: 10,
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
