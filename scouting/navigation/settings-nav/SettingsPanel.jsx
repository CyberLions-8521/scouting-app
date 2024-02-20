import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function SettingsPanel({ navigation }) {
    return (
    <>        
          <View style={styles.topPiece} />
          <View style={styles.container}>

            <View style={styles.titleContainer}>
              <Pressable onPress={() => navigation.navigate('PasswordPrompt')}>
                <Text style={[styles.title, {fontWeight:'bold'}]}>{'<'}</Text>
              </Pressable>
              <Text style={styles.title}>Settings Panel</Text>
            </View>

            
            <Pressable style={styles.button} onPress={() => navigation.navigate('DeleteRobot')}>
              <Text style={styles.buttonText}>Delete Robot Profile</Text>
            </Pressable>

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

    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap:10
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

    button: {
      width:'90%',
      height:'7%',
      backgroundColor: '#E1584B',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttonText: {
      fontSize: 20,
      color: 'white',
    },
  }
);

