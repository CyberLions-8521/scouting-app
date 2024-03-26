import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DisplayProfile({ profileData }) {

	return (
		<>
			<View style={styles.teamSelection}>
				<Text>{profileData.profile.teamName}</Text>
				<Text>{profileData.profile.teamNumber}</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	teamSelection: {
		width: '100%',
		minHeight: 70,
		backgroundColor: 'white',
		justifyContent: 'center',
		borderColor: 'lightgrey',
		borderWidth: 2.5,
		paddingHorizontal: 10,
		marginBottom: 10,
		gap: 2.5,
	},
});
