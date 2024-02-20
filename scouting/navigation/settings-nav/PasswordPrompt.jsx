import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function PasswordPrompt({ navigation }) {

    const [passValue, setPassValue] = useState('')
    
    let submitPassword = () => {
        if (passValue == 'cyberlions8521') {
            navigation.navigate('SettingsPanel');
        }
    };

    return (
    <>        
        <View style={styles.topPiece}></View>

        <View style={styles.container}>
            <Text style={styles.title}>Settings Panel</Text>

            <Text style={styles.header}>Admin Access Only</Text>

            <View style={styles.inputs}>
                <TextInput style={[styles.inputText, styles.inputBox]} placeholder='Password' onChangeText={setPassValue} value={passValue} secureTextEntry/>
                <Pressable style={styles.submitButton} onPress={submitPassword}>
                    <Text style={styles.submitText}>Submit</Text>
                </Pressable>
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
      padding: 10,
      paddingHorizontal: 20,
      backgroundColor: 'white',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      gap: 20
    },

    title: {
      fontSize: 30,
    },

    header: {
      fontSize: 22,
      fontWeight: 'bold',
    },

    normalText: {
      fontSize:20,
    },

    inputs: {
      width: '100%',
      height: 40,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap:20
    }, 

    inputText: {
      fontSize:10,
    },

    inputBox: {
      borderWidth: 2,
      width:'70%',
      fontSize:15,
    },

    submitButton: {
      backgroundColor: '#E1584B',
      width:'25%',
      height: '100%',
      borderWidth: 2,
      borderColor: '#E1584B',

      justifyContent: 'center',
      alignItems: 'center',
    },

    submitText: {
      fontSize: 15,
      color: 'white'
    }


  }
);

