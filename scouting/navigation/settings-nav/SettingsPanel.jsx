import React from 'react';
import { View, Text, StyleSheet, Pressable, } from 'react-native';
import { Entypo } from '../..';


export default function SettingsPanel({ navigation }) {
    return (
    <>
      <View style={styles.container}>
        <View style={styles.topPiece} />
        <View style={styles.middlePiece}>
          <View style={styles.titleContainer}>
            <Pressable onPress={() => navigation.navigate('PasswordPrompt')}>
            <Entypo name={'chevron-left'} size={30} color={'#616161'} />
            </Pressable>
            <Text style={styles.title}>Settings Panel</Text>
          </View>

          <Pressable style={styles.button} onPress={() => navigation.navigate('DeleteRobot')}>
            <Text style={styles.buttonText}>Delete Robot Profile</Text>
          </Pressable>

        </View>
        </View>

    </>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',

      alignItems: 'center',
      flexDirection: 'column',
    },

    topPiece: {
      width: '100%',
      height: '8%',
      backgroundColor: '#E1584B',
    },

    middlePiece: {
      width: '90%',
      maxHeight: '84%',
      backgroundColor: 'white',

      paddingTop: 20,
      paddingBottom: 20,
      gap: 30,
      alignItems: 'center',
    },

    titleContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap:10,
    },

    title: {
      height: '100%',
      color: '#616161',
      fontSize: 17,
    },

    header: {
      fontSize: 22,
      fontWeight: 'bold',
    },

    normalText: {
      fontSize:20,
    },

    button: {
      minWidth:'80%',
      minHeight: '7%',
      backgroundColor: '#E1584B',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },

    buttonText: {
      fontSize: 20,
      color: 'white',
    },
  }
);

