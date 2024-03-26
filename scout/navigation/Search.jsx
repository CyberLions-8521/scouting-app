import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchRobots from './search-nav/SearchRobots.jsx';
import Profile from './search-nav/Profile.jsx';
import MatchStats from './search-nav/MatchStats.jsx';

export default function Search() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions=
      {
        {
          headerShown: false,
          animation: 'none',
        }
      }
    >

      <Stack.Screen name="SearchRobots" component={SearchRobots} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MatchStats" component={MatchStats} />

    </Stack.Navigator>
  );
}


