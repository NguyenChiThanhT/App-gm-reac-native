import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container : {
		flex: 1,
		position: 'absolute',
		marginTop: height * 0.18,
		width: width * 0.93, marginLeft: 15,
		backgroundColor: '#F9F9F9',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#E5E7D7',
		borderRadius: 10,
	},
	content: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dropboxItem: {
		flexDirection: 'row',
		width: '100%',
		height: 40,
		alignItems: 'center',
	},
	lineBottom: {
		borderBottomWidth: 1, borderBottomColor: '#DDDDDD',
	},
	viewValue: {
		flex: 0.5,
		justifyContent: 'center',
		marginLeft: 20,
	},
	viewIcon: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: 20,
	},
});

export default styles;
