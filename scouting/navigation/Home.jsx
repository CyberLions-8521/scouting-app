import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, Pressable, Image, Suspense, Alert } from 'react-native';
import StatGlimpse from '../components/home/StatGlimpse.jsx';
import informationIcon from '../assets/interface-icons/info.png';

import axios from 'axios';

export default function Home({ navigation }) {

  const [robotList, alterRobotList] = useState();

  useEffect(() => {
    // code returns undefined
    alterRobotList((prev) => axios.get('http://10.0.2.2:3000/robotList').data);

    console.log(robotList);
  }, [robotList]);

  const [closeInfo, setCloseInfo] = useState(false);

  let manageCloseInfo = () => {
    setCloseInfo((prev) => true);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />

        <View style={styles.middlePiece}>

          {closeInfo ? <></> :
            <View style={styles.getStarted}>
              <Text style={styles.header}>Get Started Scouting</Text>

              <View style={styles.important}>
                <View style={styles.importantHero}>
                  <Image style={styles.importantIconImage} alt="important icon" source={informationIcon} />
                  <Text style={styles.headerSmaller}>Important</Text>
                </View>

                <Text style={styles.importantText}>Scouting is the process of recording data for strategy, so take note!</Text>

                <Pressable onPress={manageCloseInfo}>
                  <Text style={styles.hyperlink}>Let's Get Going!</Text>
                </Pressable>
              </View>
            </View>}

            <View style={styles.viewScoutingData}>
              <Text style={styles.header}>View Scouting Data</Text>
              <View style={styles.scoutingDataGlimpses}>

                {robotList?.map((robot) =>
                  <Pressable onPress={async () => {
                    let message = await axios.get('http://10.0.2.2:3000/');
                    Alert.alert(message.data);
                    }}
                    key={robot.profile.teamNumber}>
                    <View>
                      <StatGlimpse name={robot.profile.teamNumber} teamNumber={robot.profile.teamNumber} rank={'robot.rank'} winLossRatio={'robot.winLossRatio'} />
                    </View>
                  </Pressable>
                )}

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
  hyperlink: {
    color: '#82d0f6',
    fontSize: 11.5,
  },

  important: {
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: '#e9ebee',
    borderRadius: 5,
    gap: 5,
    padding: 10,
    justifyContent: 'space-between',
  },
  importantHero: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  importantText: {
    color: '#616161',
    fontSize: 12,
  },
  importantIconImage: {
    width: 15,
    height: 15,
  },
});
