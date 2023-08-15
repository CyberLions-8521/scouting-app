import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function Home({ navigation }) {
  return (
    <>
        <View>
            <Text>Home Page</Text>
        </View>

        <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
      />
    </>
 );
}
