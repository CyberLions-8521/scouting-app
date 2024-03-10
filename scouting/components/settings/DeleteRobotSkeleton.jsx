import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DeleteRobotSkeleton() {
  return (
	<>
        <View style = {s.teamSelection}>
            <View style={s.teamName}></View>
            <View style={s.teamImage} />
        </View>
        <View style = {s.teamSelection}>
            <View style={s.teamName}></View>
            <View style={s.teamImage} />
        </View>
        <View style = {s.teamSelection}>
            <View style={s.teamName}></View>
            <View style={s.teamImage} />
        </View>
        <View style = {s.teamSelection}>
            <View style={s.teamName}></View>
            <View style={s.teamImage} />
        </View>
        <View style = {s.teamSelection}>    
            <View style={s.teamName}></View>
            <View style={s.teamImage} />
        </View>
        <View style = {s.teamSelection}>
            <View style={s.teamName}></View>
            <View style={s.teamImage} />
        </View>
	</>
  );
}

const s = StyleSheet.create({
    teamSelection: {
        width: '100%',
        minHeight: 70,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#616161',
        borderWidth: 1,
        padding: 10,
        marginBottom: '5%',
    },

    teamName: {
        height: 20,
        width:180,
        backgroundColor: 'lightgray',
    },

    teamImage: {
        width: 50,
        height: 50,
        backgroundColor: 'lightgray',
    },

    robotListContainer: {
        width:'100%',
    },
});