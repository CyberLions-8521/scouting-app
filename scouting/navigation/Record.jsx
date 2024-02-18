import { React } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateProfile from './record-nav/CreateProfile';
import RecordGame from './record-nav/RecordGame';
import SelectProfile from './record-nav/SelectProfile';

export default function Record() {

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

      <Stack.Screen name="SelectProfile" component={SelectProfile} />
      <Stack.Screen name="CreateProfile" component={CreateProfile} />
      <Stack.Screen name="RecordGame" component={RecordGame} />

    </Stack.Navigator>
  );
}
