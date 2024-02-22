import React from 'react';
import { View, TextInput } from 'react-native';
import { Entypo } from '../../index.js';

export default function Counter({ target, setTarget, style }) {
    return (
        <View style={{ flexDirection: 'row', width: '25%', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Entypo name={'circle-with-minus'} size={40} onPress={() => setTarget(prev => prev - 1)} />
            <TextInput
            value={target.toString()}
            style={style}
            keyboardType={'numeric'}
            onChangeText={(value) => {
                const parsedValue = parseInt(value);
                if (!isNaN(parsedValue)) {
                    setTarget(parsedValue);
                }
                else {
                    setTarget(0);
                }
            }}/>
            <Entypo name={'circle-with-plus'} size={40} onPress={() => setTarget(prev => prev + 1)} />
        </View>
    )
}