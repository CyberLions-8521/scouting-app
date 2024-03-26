import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableHighlight } from 'react-native';
import { useState } from 'react';

export default function PasswordPrompt({ navigation }) {

    const [passValue, setPassValue] = useState();

    let submitPassword = () => {
        // will hide password in the backend later
        if (passValue === 'cyberlions8521') {
            navigation.navigate('SettingsPanel');
        }
    };

    return (
    <>
        <View style={styles.topPiece} />

        <View style={styles.container}>
            <Text style={styles.title}>Settings Panel</Text>

            <Text style={styles.header}>Admin Access Only</Text>

            <View style={styles.inputs}>
                <TextInput style={[styles.inputText, styles.inputBox]} placeholder={'Password'} onChangeText={setPassValue} value={passValue} secureTextEntry/>

                <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
                  <Pressable style={styles.submitButton} onPress={submitPassword}>
                      <Text style={styles.submitText}>Submit</Text>
                  </Pressable>
                </TouchableHighlight>
            </View>
        </View>
    </>
    );
}


const styles = StyleSheet.create({

    topPiece: {
      width: '100%',
      height: '8%',
      backgroundColor: '#E1584B',
    },

    container: {
      width: '100%',
      height: '100%',
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: 'white',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      gap: 20,
    },

    title: {
      width: '100%',
      maxHeight: '6%',
      color: '#616161',
      fontSize: 17,
    },

    header: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    normalText: {
      fontSize:20,
    },

    inputs: {
      width: '100%',
      maxHeight: 40,

      display: 'flex',
      flexDirection: 'row',
      gap:20,
    },

    inputText: {
      fontSize:10,
    },

    inputBox: {
      borderWidth: 2.5,
      borderColor: '#616161',
      width:'70%',
      fontSize:15,
    },

    submitButton: {
      backgroundColor: '#E1584B',
      width:'100%',
      height: '100%',
      paddingLeft: 20,
      paddingRight: 20,

      justifyContent: 'center',
      alignItems: 'center',
    },

    submitText: {
      fontSize: 15,
      color: 'white',
    },
  }
);

