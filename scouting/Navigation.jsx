import Home from './navigation/Home.jsx';
import Search from './navigation/Search.jsx';
import Record from './navigation/Record.jsx';
import Settings from './navigation/Settings.jsx';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Navigation() {

  const Tab = createBottomTabNavigator();

  return (
    <>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{title: 'Home Page'}} />
            <Tab.Screen name="Search" component={Search} options={{title: 'Search Page'}} />
            <Tab.Screen name="Record" component={Record} options={{title: 'Record Data Page'}} />
            <Tab.Screen name="Settings" component={Settings} options={{title: 'Settings Page'}} />
        </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
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
