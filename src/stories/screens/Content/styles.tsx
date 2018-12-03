import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {},
	header: {
		backgroundColor: '#fff', borderBottomWidth: 2, borderBottomColor: '#DDDDDD',
	},
	headerText: {
		fontSize: 14, fontWeight: '500', color: '#3C3C3C',
	},
	headerDropdown: {
		height: 48, width: width * 0.9, marginLeft: 20, marginTop: 10,
	},
	dropdown: {
		flexDirection: 'row',
		height: 48,
		width: '100%',
		backgroundColor: '#F9F9F9',
		alignItems: 'center',
	},
	valueDropbox: {
		flex: 0.5, alignItems: 'flex-start', marginLeft: 10,
	},
	iconDropdown: {
		flex: 0.5, alignItems: 'flex-end', marginRight: 10,
	},
	btnContent: {
		flexDirection: 'row',
		width,
		height: 48,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#DDDDDD',
	},
	btnAction: {
		flex: 0.4, height: 40, width: 168,
		borderColor: '#945D60',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 3,
	},
	textBtn: {
		color: '#945D60', fontSize: 14, fontWeight: '900',
	},
	viewInput: {
		width, height: 2,
		backgroundColor: '#DDDDDD',
		marginTop: 10, marginBottom: 20,
	},
	input: {
		height: 200, width, backgroundColor: '#fff', fontSize: 13, fontWeight: '700',
	},
	btnCamera: {
		height: 145, width: width * 0.9,
		backgroundColor: '#F6F6F6',
		marginLeft: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	lineInput: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		borderBottomWidth: 2,
		borderBottomColor: '#DDDDDD',
	},
	numberOnLine: {
		color: '#945D60',
		fontWeight: '700',
		fontSize: 12,
		marginBottom: 10,
		marginRight: 5,
	},
	iconForward: {
		fontSize: 22, color: '#CCCCCC',
	},
	textBtnContent: {
		fontSize: 12, color: '#3C3C3C',
	},
	btnUpload: {
		width: width * 0.9, height: 40,
		backgroundColor: '#945D60', marginLeft: 20,
		justifyContent: 'center',
		alignItems: 'center', borderRadius: 3,
	},
	termsofService: {
		width: width * 0.9, height: 60,
		justifyContent: 'center', marginTop: 20,
		marginLeft: 20, marginBottom: 5,
		alignItems: 'center',
	},
	btnRoteImage: {
		flexDirection: 'row',
		width: 168, height: 40,
		borderWidth: 1, borderColor: '#AF8589',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textRoteImage: {
		color: '#AF8589', fontSize: 14, marginLeft: 10,
	},
	iconRoteImage: {
		color: '#AF8589', fontSize: 23, fontWeight: '900',
	},
});
export default styles;
