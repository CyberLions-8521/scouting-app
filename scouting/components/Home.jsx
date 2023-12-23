import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.Header}>Scouting App</Text>
            <Text>Record data about other teams, such as their drivebase, win/loss ratio, and more! </Text>

        </View>
    </>
 );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      width: '100%',

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  launchImage: {
      width: '50%',
      height: '30%',
  },
  Header: {
    fontSize: 5,
  },
});
