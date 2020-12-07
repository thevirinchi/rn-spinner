import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

// Import Spinner Component
import Spinner from './components/Spinner'

export default function App() {

	//	state to manage spinner's visibility
	const [loading, toggleLoading] = useState(false)

	//	function to handle loading event
	const handleLoading = () => {
		toggleLoading(true)

		//	toggles loading after 3 seconds
		setTimeout(function () {
			toggleLoading(false)
		}, 3000)
	}

	return (
		<View style={styles.container}>
			<Button onPress={handleLoading} title="Start Loading" color="#42A5F5" />
			{/* Loading Component */}
			<Spinner loadingState={loading} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
