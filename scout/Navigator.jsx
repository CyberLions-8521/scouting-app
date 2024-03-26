/* eslint-disable react/no-unstable-nested-components */
import { Home, Search, Record, Settings} from './index.js';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, FontAwesome, AntDesign, MaterialCommunityIcons, Ionicons } from './index.js';

export default function Navigator() {

  const Tab = createBottomTabNavigator();

  return (
    <>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#E1584B',
              width: '100%',
            },
          }}
        >
            <Tab.Screen name="Home" component={Home}
              options={{
                title: 'Home Page',
                tabBarIcon: ({focused}) => (
                  // The focused prop is active whenever the tab.screen component is active

                    // Entypo is a library of icons. Refer to this video https://www.youtube.com/watch?v=1d5Dtc1UL1c&ab_channel=CodeBig
                    <Entypo
                      name="home"
                      size={30}
                      color={focused ? 'white' : 'black'}
                      />
                  ),
                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen name="Search" component={Search}
              options={{
                title: 'Search Page',
                tabBarIcon: ({focused}) => (
                    <AntDesign name="search1" size={30} color={focused ? 'white' : 'black'} />
                  ),
                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen name="Record" component={Record}
              options={{
                title: 'Record Page',
                tabBarIcon: ({focused}) => (
                    <AntDesign name="pluscircleo" size={30} color={focused ? 'white' : 'black'} />
                  ),
                tabBarShowLabel: false,
              }}
            />

            <Tab.Screen name="Settings" component={Settings}
              options={{
                title: 'Settings Page',
                tabBarIcon: ({focused}) => (
                    <Ionicons name="settings-outline" size={30} color={focused ? 'white' : 'black'} />
                  ),
                tabBarShowLabel: false,
              }}
            />
        </Tab.Navigator>
    </>
  );
}
