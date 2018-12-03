import { StyleSheet } from 'react-native';

const primaryColor = '#945D60';
const textColor = '#3C3C3C';
const textColorPlaceHolder = '#8B8B8B';

const styles: any = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	iconClose: {
		color: primaryColor,
		marginLeft: 10,
	},
	title: {
		color: primaryColor,
		fontWeight: '900',
		fontSize: 16,
	},
	btnRight: {
		fontSize: 14,
		color: textColor,
	},
	label: {
		width: 100,
		fontSize: 12,
		color: textColor,
	},
	textHolder: {
		fontSize: 12,
		color: textColorPlaceHolder,
	},
	containerButton: {
		marginTop: 43,
		alignSelf: 'center',
	},
	button: {
		width: 345,
		height: 60,
		justifyContent: 'center',
		marginBottom: 5,
	},
	// Button Default
	btnDefault: {
		backgroundColor: '#FFF',
		borderColor: primaryColor,
		borderWidth: 1,
	},

	textOfBtnRegistration: {
		color: primaryColor,
		fontWeight: '900',
	},
	description: {
		marginTop: 46,
		marginBottom: 16,
		fontSize: 12,
		marginRight: 14,
		color: textColor,
	},
	emailMagazine: {
		paddingTop: 20,
		paddingBottom: 17,
	},
	switchButton: {
		marginLeft: 190,
		alignSelf: 'flex-end',
	},
	btnRegistration: {
		borderColor: '#AF8589',
	},
	btnForgotPassword: {
		borderColor: 'transparent',
		backgroundColor: '#F1F1F1',
	},
	textOfBtnForgotPassword: {
		color: textColor,
	},
	textError: {
		color: '#E35664',
	},
});
export default styles;
