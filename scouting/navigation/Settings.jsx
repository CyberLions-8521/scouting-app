import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings() {
  return (
    <>
      <View style={styles.topPiece}></View>

      <View style={styles.container}>
          <Text style={styles.title}>Settings</Text>

            <Text style={styles.header}>General</Text>
              <Text style={styles.normalText}>Screaming Noises</Text>
              <Text style={styles.normalText}>Oddly Vague Setting</Text>
              <Text style={styles.normalText}>Infinite Acceleration</Text>

            <Text style={styles.header}>Appearance</Text>
              <Text style={styles.normalText}>Font Family</Text>

            <Text style={styles.header}>Sensitive</Text>
              <View style={[styles.boxed, styles.boxedGray]}><Text style={styles.boxText}>Reset Data</Text></View>
              <View style={[styles.boxed, styles.boxedRed]}><Text style={styles.boxText}>Reset Yourself</Text></View>
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
      textAlign: 'center',
    },

    header: {
      fontSize: 22,
      fontWeight: 'bold',
    },

    normalText: {
      fontSize:20,
    },

    boxed: {
      width:'100%',
      height:'10%',

      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 5
    },

    boxedRed: {
      backgroundColor: 'red'
    },

    boxedGray: {
      backgroundColor: 'gray'
    },

    boxText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    }
  }
);

