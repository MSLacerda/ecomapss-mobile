import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	wrapper: {
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	linearGradient: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: "100%",
		height: "100%"
	},
	full: {
		flex: 1,
		justifyContent: 'center',
		width: "100%",
		height: "100%"
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	centerSelf: {
		alignSelf: 'center'
	},
	form:{
		margin: 20
	},
	button:{
		marginTop : 20, 
		marginLeft: 12
	},
	label:{
		color: '#fff',
		// fontSize: 30,
	}
});

export default styles;