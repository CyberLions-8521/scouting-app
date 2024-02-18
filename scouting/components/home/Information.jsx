import informationIcon from '../../assets/interface-icons/info.png';

import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Information({ closedState }) {

  let hi = () => {
    closedState = true;
  };

  return (
    <>
      {
          closedState ? <></> : <View style={styles.important}>
          <View style={styles.importantHero}>
              <Image style={styles.importantHeroImage} alt="important icon" source={informationIcon} />
              <Text style={styles.headerSmaller}>Important</Text>
          </View>

          <Text style={styles.text}>Scouting is the process of recording data for strategy, so take note!</Text>

            <Pressable onClick={hi()}>
              <Text style={styles.hyperlink}>Let's Get Going!</Text>
            </Pressable>
          </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
    important: {
      maxWidth: '100%',
      maxHeight: '100%',
      backgroundColor: '#e9ebee',
      borderRadius: 5,
      gap: 5,
      padding: 10,
      justifyContent: 'space-between',
    },
    importantHero: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    header: {
      color: '#616161',
      fontSize: 17,
    },
    text: {
      color: '#616161',
      fontSize: 12,
    },
    hyperlink: {
      color: '#82d0f6',
      fontSize: 11.5,
    },
    importantHeroImage: {
      width: 15,
      height: 15,
    },
  });
