import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Launch from './navigation/Launch.jsx';
import Navigation from './Navigation.jsx';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false,
              animation: 'none',
            }
          }
        >

          <Stack.Screen name="Launch" component={Launch} options={{title: 'Launch Screen'}} />
          <Stack.Screen name="Navigation" component={Navigation} options={{title: 'Navigation Screen'}} />

        </Stack.Navigator>
      </NavigationContainer>
  </>
);
}
