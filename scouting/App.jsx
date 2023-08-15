import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from './components/Loading.jsx';
import Home from './components/Home.jsx';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{title: 'Home Page'}} />
        <Stack.Screen name="Loading" component={Loading} options={{title: 'Loading Page'}} />

      </Stack.Navigator>
    </NavigationContainer>
);
}
