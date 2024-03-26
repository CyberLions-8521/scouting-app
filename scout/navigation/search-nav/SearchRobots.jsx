import { React, useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, RefreshControl } from 'react-native';
import { AntDesign } from '../../index';
// import DisplayRobot from '../../components/search/DisplayRobot';
import SearchRobotsSkeleton from '../../components/search/SearchRobotsSkeleton';

import StatGlimpse from '../../components/home/StatGlimpse';

import axios from 'axios';

export default function SearchRobots({ navigation }) {
  const [genData, setGenData] = useState();

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/robotList')
    .then((response) => {
      setGenData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

    return (
        <>
            <View style={styles.container}>
              <View style={styles.topPiece} />
              <View style={styles.middlePiece}>
                <Text style={styles.header}>Get Started Scouting</Text>
                <View style={styles.searchSection}>
                  <AntDesign style={styles.searchIcon}name="search1" size={25} color={'black'} />
                  <TextInput
                  style={styles.searchbar}
                  placeholder={'Search'}
                  //value={searchQuery}
                  //onChangeText={setSearchQuery}
                  />
                </View>
                <View style={styles.viewScoutingData}>

                  <ScrollView>

                    <View style={styles.scoutingDataGlimpses}>
                      <Suspense fallback={<SearchRobotsSkeleton/>}>

                          {genData?.map((robot) =>

                            <Pressable key={robot.profile.teamNumber}
                              onPress={() => {
                                navigation.navigate('Profile', { teamNumber: robot.profile.teamNumber });
                              }
                            }>
                              <StatGlimpse name={robot.profile.teamName} teamNumber={robot.profile.teamNumber} driveBase={robot.profile.driveBase} intake={robot.profile.intake} />
                            </Pressable>

                          )}

                      </Suspense>
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
