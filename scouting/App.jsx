import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Launch from './components/Launch.jsx';
import Home from './components/Home.jsx';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false}}>

        <Stack.Screen name="Launch" component={Launch} options={{title: 'Launch Screen'}} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home Page'}} />

      </Stack.Navigator>
    </NavigationContainer>
);
}
