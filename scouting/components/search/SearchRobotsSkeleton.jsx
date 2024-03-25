import { React } from 'react';
import { View, Skeleton, StyleSheet, Text } from 'react-native';
import { AntDesign } from '../../index';
import StatGlimpseSkeleton from '../../components/home/StatGlimpseSkeleton';

//added multiple StatGlimpses to fill up the skeleton screen
export default function SearchRobotsSkeleton(){
    return (
            <View style={styles.container}>
              <View style={styles.topPiece} />
              <View style={styles.middlePiece}>
                <Text style={styles.header}>Get Started Scouting</Text>
                <View style={styles.searchSection}>
                  <AntDesign style={styles.searchIcon}name="search1" size={25} color={'black'} />
                  <View style={styles.searchbar}/>
                </View>
                <View style={styles.viewScoutingData}>
                <StatGlimpseSkeleton/>
                <StatGlimpseSkeleton/>
                <StatGlimpseSkeleton/>
                <StatGlimpseSkeleton/>
                </View>

            </View>
          </View>
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
      header: {
        color: '#616161',
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10,
      },
      topPiece: {
        width: '100%',
        height: '8%',
        backgroundColor: '#E1584B',
      },
      middlePiece: {
        width: '90%',
        maxHeight: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        gap: 10,
        alignItems: 'center',
      },
      searchSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#616161',
        borderWidth: 2.5,
        padding: 5,
      },
      searchbar: {
        maxHeight: 40,
        paddingLeft: 10,
        width: '100%'
      },
      searchIcon: {
        marginLeft: 50,
      },
      viewScoutingData: {
        width: '100%',
        maxHeight: '84%',
      },
      searchIcon: {
        marginLeft: 50,
      },
});