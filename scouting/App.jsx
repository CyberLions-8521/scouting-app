import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Launch from './navigation/Launch.jsx';
import Home from './navigation/Home.jsx';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
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
        <Stack.Screen name="Home" component={Home} options={{title: 'Home Page'}} />

      </Stack.Navigator>
    </NavigationContainer>
);
}
