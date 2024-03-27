import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, RefreshControl } from 'react-native';
import StatGlimpse from '../components/home/StatGlimpse.jsx';
import StatGlimpseSkeleton from '../components/home/StatGlimpseSkeleton.jsx';
import informationIcon from '../assets/interface-icons/info.png';

import axios from 'axios';

export default function Home({ navigation }) {

  const [robotList, alterRobotList] = useState();

  // isLoading will allow the display of a skeleton screen while data is being fetched
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get('http://bckend.team8521.com/robotList')
    .then((response) => {
      alterRobotList(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);
    });

  }, []);

  // refresh use state allows refreshing for new robot data on the home page
  const [isRefreshing, setIsRefreshing] = useState(false);

  // this is the refresh callback when the user pulls down on the screen
  // updating the array will automatically re-render the home screen
  const onRefresh = () => {
    setIsRefreshing(true);

    axios.get('http://bckend.team8521.com/robotList')
    .then((response) => {
      alterRobotList(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);
    });

    setIsRefreshing(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />

        <View style={styles.middlePiece}>

          <View style={styles.getStarted}>
              <Text style={styles.header}>Get Started Scouting</Text>

              <View style={styles.important}>
                <View style={styles.importantHero}>
                  <Image style={styles.importantIconImage} alt="important icon" source={informationIcon} />
                  <Text style={styles.headerSmaller}>Important</Text>
                </View>

                <Text style={styles.importantText}>Scouting is the process of recording data for strategy, so take note!</Text>
              </View>
          </View>

            <View style={styles.viewScoutingData}>
              <Text style={styles.header}>View Scouting Data</Text>
              <ScrollView style={styles.scoutingDataGlimpses}
                refreshControl={
                  <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                }
              >

                { isLoading ? <StatGlimpseSkeleton /> :
                  robotList?.map((robot) =>
                  <Pressable key={robot.profile.teamNumber}>
                     <StatGlimpse name={robot.profile.teamName} teamNumber={robot.profile.teamNumber} driveBase={robot.profile.driveBase} intake={robot.profile.intake} />
                  </Pressable>
                )}

              </ScrollView>

              <Text style={styles.text2}>For more information of all teams, click on the search icon</Text>
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
    gap: 30,
    alignItems: 'center',
  },
  getStarted: {
    minHeight: '15%',
    width: '100%',
    gap: 20,
  },
  viewScoutingData: {
    width: '100%',
    maxHeight: '84%',
    gap: 10,
  },
  scoutingDataGlimpses: {
    maxHeight: '83%',
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
    height: 80,
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
