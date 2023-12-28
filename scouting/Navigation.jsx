/* eslint-disable react/no-unstable-nested-components */
import { Home, Search, Record, Settings} from './index.js';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, FontAwesome, AntDesign, MaterialCommunityIcons, Ionicons } from './index.js';

export default function Navigation() {

  const Tab = createBottomTabNavigator();

  return (
    <>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
            <Tab.Screen name="Home" component={Home}
              options={{
                title: 'Home Page',
                tabBarIcon: () => (

                    // Entypo is a library of icons. Refer to this video https://www.youtube.com/watch?v=1d5Dtc1UL1c&ab_channel=CodeBig
                    <Entypo name="home" size={24} />
                  ),
                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen name="Search" component={Search}
              options={{
                title: 'Search Page',
                tabBarIcon: () => (
                    <AntDesign name="search1" size={24} />
                  ),
                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen name="Record" component={Record}
              options={{
                title: 'Record Page',
                tabBarIcon: () => (
                    <AntDesign name="pluscircleo" size={24} />
                  ),
                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen name="Settings" component={Settings}
              options={{
                title: 'Settings Page',
                tabBarIcon: () => (
                    <Ionicons name="settings-outline" size={24} />
                  ),
                tabBarShowLabel: false,
              }}
            />
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
    image: {
      width: 40,
      height: 40,
  },
});


