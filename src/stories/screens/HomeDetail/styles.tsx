import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const colorText = '#3C3C3C';
const primaryColor = '#945D60';
const backgroundButton = '#AF473C';

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
	},
	title: {
		fontSize: 14,
		color: colorText,
		fontWeight: '500',
		marginLeft: 15,
		marginRight: 15,
	},
	articleTitle: {
		fontSize: 18,
		color: primaryColor,
		fontWeight: '900',
	},
	textDescription: {
		color: colorText,
		fontSize: 12,
		marginTop: 23,
		marginBottom: 23,
		lineHeight: 20,
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginRight: 10,
	},
	btnFolowers: {
		backgroundColor: 'rgb(227, 86, 100)',
		width: 110,
		height: 29,
		alignSelf: 'flex-end',
	},
	username: {
		fontSize: 12,
		color: colorText,
		lineHeight: 35,
	},
	followers: {
		fontSize: 12,
		fontWeight: '900',
		marginLeft: -10,
	},
	containerFavorite: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 14,
		justifyContent: 'space-between',
	},
	btnHeart: {
		width: 120,
		height: 45,
		borderWidth: 1,
		marginLeft: 5,
		borderColor: '#945D60',
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	heart: {
		color: primaryColor,
		textAlign: 'center',
		marginLeft: -15,
		fontWeight: '900',
	},
	btnStar: {
		width: 220,
		height: 45,
		marginRight: 5,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: primaryColor,
		justifyContent: 'center',
	},
	createAt: {
		fontSize: 9,
		color: '#8B8B8B',
		marginTop: 8,
		marginRight: 0,
		paddingRight: 6,
		marginBottom: 25,
	},
	txtContent: {
		fontSize: 14,
		lineHeight: 25,
	},

	relatedKeyWords: {
		marginTop: 56,
		alignItems: 'center',
		marginBottom: 34,
	},
	titleKeyword: {
		position: 'relative',
		top: 10,
		backgroundColor: '#FFF',
		width: 150,
		fontWeight: '900',
		textAlign: 'center',
		zIndex: 1,
	},
	lineRelativeKey: {
		backgroundColor: '#FFF',
	},
	containerTag: {
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		flexWrap: 'wrap'},
	tag: {
		backgroundColor: '#F1F1F1',
		margin: 4,
	},
});
export default styles;