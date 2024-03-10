import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function checkbox({ checkboxTitle, stateValue, changeState }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox disabled={false} value={stateValue} onValueChange={(newVal) => changeState(newVal)} tintColors={{ true: '#E1584B', false: '' }}/>
        <Text style={styles.subText}>{checkboxTitle}</Text>
    </View>
  );
}

// stylesheet is a class with the create method
const styles = new StyleSheet.create({
    subText: {
        fontSize: 15,
        color: '#616161',
    },
});
