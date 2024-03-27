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
    axios.get('http://localhost:3000/robotList')
    .then((response) => {
      setGenData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    axios.get('http://localhost:3000/robotList')
    .then((response) => {
      setGenData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    setIsRefreshing(false);
  };

  // search functionality
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (text) => {
    setSearchValue(text);
    const filteredData = genData.filter((robot) => {
      return robot.profile.teamName.toLowerCase().includes(text.toLowerCase());
    });

    // updating robot list based on the filter information
    setGenData(filteredData);

    // edge case for when the search bar is empty
    if (text === ''){
      onRefresh();
    }
  };

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
              placeholder={'Search by Team Name'}
              value={searchValue}
              onChangeText={handleSearch}
              />
            </View>
            <View style={styles.viewScoutingData}>

              <ScrollView
                refreshControl={
                  <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                }
              >
                  <Suspense fallback={<SearchRobotsSkeleton />}>
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
      padding: 5,
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
      maxHeight: '83%',
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
