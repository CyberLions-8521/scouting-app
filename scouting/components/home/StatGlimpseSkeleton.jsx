import fillerImage from '../../assets/interface-icons/filler-image.png';
import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

export default function StatGlimpseSkeleton() {
//const greyBoxWidth = useRef(new Animated.Value(0)).current;
  /*
  useEffect({
    if (isLoading) {
       Animated.timing(greyBoxWidth, {
         toValue: 0,
         duration: 0,
         useNativeDriver: false,
       }).start();
     }
  }, [isLoading]);
  */

  return (
    <View style={styles.scoutingDataGlimpsePiece}>
        <View style={styles.metadata}>
            <>
              <View style={styles.headerSkeleton}/>
              <View style={styles.stats}>
                  <View style={styles.textSkeleton1}/>
                  <View style={styles.textSkeleton2}/>
              </View>
            </>
        </View>
          <Image style={styles.fillerImage} alt="filler image" source={fillerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
    headerSkeleton: {
      backgroundColor: '#E9EBEE',
      width: 170,
      height: 25,
      borderRadius: 5,
    },
    textSkeleton1: {
      backgroundColor: '#E9EBEE',
      width: 100,
      marginBottom: 10,
      height: 20,
      borderRadius: 5,
    },
    textSkeleton2: {
      backgroundColor: '#E9EBEE',
      width: 130,
      height: 20,
      borderRadius: 5,
    },
    scoutingDataGlimpsePiece: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#d3d3d3',
    },
    metadata: {
        gap: 10,
        maxWidth: '60%',
        flexWrap: 'wrap',
    },
    fillerImage: {
      width: 120,
      height: '100%',
    },
    greyBox: {
      //will adjust to text size
      width: 0,
      height: 0,
      backgroundColor: '#616161',
    },
  });
