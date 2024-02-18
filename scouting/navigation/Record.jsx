import { React } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateProfile from "./record-nav/CreateProfile";
import RecordGame from "./record-nav/RecordGame";
import SelectProfile from "./record-nav/SelectProfile";

// This will be where most of the post requests will happen. People will record data here
export default function Record() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator 
      screenOptions=
      {
        { 
          headerShown: false, 
          animation: 'none' 
        }
      }
    >
      <Stack.Screen name="SelectProfile" component={SelectProfile} />
      <Stack.Screen name="CreateProfile" component={CreateProfile} />
      <Stack.Screen name="RecordGame" component={RecordGame} />
    </Stack.Navigator>
  );
}