import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import axios from 'axios';


export default function DisplayProfile() {

	const [profileData, setProfileData] = useState([]);
	
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('http://10.0.2.2:3000/getProfile');
				setProfileData(response.data);
			}
			catch (error) {
				console.error('Error making a GET request:', error);
			}
		}
		fetchData();
	}, []);

	return (
		<>
			{profileData?.filter((robot) => robot._id != 'robotID').map((robot) =>
				<Pressable key={robot.robotID} onPress={() => navigation.navigate('RecordGame', { robot: robot })}>
					<View style={styles.teamSelection}>
						<Text>{robot.profile.teamName}</Text>
						<Text>{robot.profile.teamNumber}</Text>
					</View>
			  	</Pressable>
			)}
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