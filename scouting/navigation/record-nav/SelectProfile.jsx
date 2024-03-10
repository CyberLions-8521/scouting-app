import React, { Suspense, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import SelectProfileSkeleton from '../../components/record/SelectProfileSkeleton';
import DisplayProfile from '../../components/record/DisplayProfile';

import axios from 'axios';

export default function SelectProfile({ navigation }) {

  const [profileData, setProfileData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('http://10.0.2.2:3000/getProfile');
				setProfileData(response.data);
			}
			catch (error) {
				console.error('Error making a GET request:', error);
			}
		}
		fetchData();
	}, [setProfileData]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />
        <View style={styles.middlePiece}>
          <Text style={styles.header}>Select Robot to Scout</Text>
          <ScrollView style={styles.viewSelection}>
            <Suspense fallback={<SelectProfileSkeleton />}>

              {profileData?.map(robot => {
                <Pressable key={robot.robotID} onPress={() => navigation.navigate('RecordGame', { robot: robot })}>
                  <DisplayProfile profileData={profileData} />
                </Pressable>;
              })}

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
