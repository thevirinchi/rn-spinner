import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const Spinner = props => {

	return (
		(
			props.loadingState
				?
				// Overlay View
				<View style={styles.overlay}>
					{/* Spinner Box */}
					<View style={styles.container}>
						{/* React Native default Spinnner */}
						<ActivityIndicator size="large" color="#ffd100" />
						<Text>Loading...</Text>
					</View>
				</View>
				:
				<View />
		)
	)
}

const styles = StyleSheet.create({
	overlay: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
		height: "100%", width: "100%", justifyContent: "center",
		alignItems: "center" },
	container: { padding: 24, borderRadius: 16, justifyContent: "center",
		alignItems: "center", backgroundColor: "#fafafa" }
})

export default Spinner

