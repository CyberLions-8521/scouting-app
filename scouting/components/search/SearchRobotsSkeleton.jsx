import { React } from 'react';
import { View, Skeleton, StyleSheet, Text } from 'react-native';
import { AntDesign } from '../../index';
import StatGlimpse from '../../components/home/StatGlimpse';

export default function SearchRobotsSkeleton(){
    return (
        <View styles={styles.container}>
        <View styles={styles.topPiece}/>
            <View styles={styles.middlePiece}>
                <View styles={styles.searchbar}>
                    <AntDesign style={styles.searchIcon}name="search1" size={25} color={'black'} />
                </View>
                <View styles={styles.viewScoutingData}>
                    <StatGlimpse isLoading={true}/>
                    <StatGlimpse isLoading={true}/>
                    <StatGlimpse isLoading={true}/>
                    <StatGlimpse isLoading={true}/>
                    <StatGlimpse isLoading={true}/>
                </View>
            </View>
        <View styles={styles.bottomPiece}/>
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
      searchbar: {
        width: '100%',
        maxHeight: 40,
        paddingLeft: 10,
      },
      searchIcon: {
        marginLeft: 50,
      },
});
