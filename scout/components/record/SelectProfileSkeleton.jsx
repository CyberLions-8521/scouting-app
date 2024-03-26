import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SelectProfileSkeleton() {
  return (
	<>
		<View style={styles.border}>
			<View style={styles.bigText}/>
			<View style={styles.smallText}/>
		</View>
		<View style={styles.border}>
			<View style={styles.bigText}/>
			<View style={styles.smallText}/>
		</View>
		<View style={styles.border}>
			<View style={styles.bigText}/>
			<View style={styles.smallText}/>
		</View>
		<View style={styles.border}>
			<View style={styles.bigText}/>
			<View style={styles.smallText}/>
		</View>
		<View style={styles.border}>
			<View style={styles.bigText}/>
			<View style={styles.smallText}/>
		</View>
		<View style={styles.border}>
			<View style={styles.bigText}/>
			<View style={styles.smallText}/>
		</View>
	</>
  );
}

const styles = StyleSheet.create({
	border: {
		width: '100%',
		minHeight: 70,
		backgroundColor: 'white',
		flexDirection: 'column',
		justifyContent: 'center',
		borderColor: 'lightgrey',
		borderWidth: 2.5,
		paddingHorizontal: 10,
		marginBottom: 10,
		gap: 2.5,
	},
	bigText: {
		backgroundColor: 'lightgrey',
		width: 100,
		minHeight: 15,
	},
	smallText: {
		backgroundColor: 'lightgrey',
		width: 50,
		minHeight: 15,
	},
});