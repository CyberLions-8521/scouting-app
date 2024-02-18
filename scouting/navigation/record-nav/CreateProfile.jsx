import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CreateProfile({ navigation }) {
    return (
        <View>
            <Text>Create Profile</Text>
            <Button
                title="Go Back (temporary)"
                onPress={() => navigation.navigate('SelectProfile')}
            />
        </View>
    );
}