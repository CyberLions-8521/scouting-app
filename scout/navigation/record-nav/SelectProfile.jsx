import React, { Suspense, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, RefreshControl } from 'react-native';
import SelectProfileSkeleton from '../../components/record/SelectProfileSkeleton';
import DisplayProfile from '../../components/record/DisplayProfile';

import axios from 'axios';

export default function SelectProfile({ navigation }) {

  const [profileData, setProfileData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/robotList')
    .then((response) => {
      setProfileData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    axios.get('http://localhost:3000/robotList')
    .then((response) => {
      setProfileData(response.data);
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
          <Text style={styles.header}>Select Robot to Scout</Text>

          <ScrollView style={styles.viewSelection}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
          >
            <Suspense fallback={<SelectProfileSkeleton />}>

              {profileData?.map((robot) =>

                <Pressable key={'recording:' + robot.profile.teamNumber} onPress={() => navigation.navigate('RecordGame', { robot: robot })}>
                  <DisplayProfile profileData={robot} />
                </Pressable>

              )}

            </Suspense>
          </ScrollView>

          <Pressable style={styles.createButton} onPress={() => navigation.navigate('CreateProfile')}>
            <Text style={styles.createButtonText}>Create New Robot Profile</Text>
          </Pressable>
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
    minHeight: '100%',
    backgroundColor: 'white',

    paddingTop: 20,
    paddingBottom: 20,
  },
  header: {
    width: '100%',
    minHeight: '6%',
    color: '#616161',
    fontSize: 17,
  },
  viewSelection: {
    width: '100%',
    maxHeight: '71%',
  },
  teamImage: {
    width: 50,
    height: 50,
  },
  createButton: {
    width: '60%',
    minHeight: '8%',
    backgroundColor: '#F27468',
    borderRadius: 5,
    borderColor: '#E1584B',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: 'white',
    fontSize: 17,
  },
});
