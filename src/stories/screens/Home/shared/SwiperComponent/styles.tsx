import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: '#FBFAFA'
	},
	row: {
		flex: 1,
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: 'center'
	},
	mt: {
		marginTop: 18
	},
	inputSearch: {
		height: 40,
		backgroundColor: 'rgb(242,242,243)'
	},
	badge: {
		top: 0,
		right: 0,
		zIndex: 10,
		height: 18,
		width: 18,
		borderRadius: 10,
		position: 'absolute',
		backgroundColor: 'rgb(148,93,96)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnPerson: {
		marginLeft: 15,
		backgroundColor: 'rgb(242,242,243)',
		height: 40
	},
	activeTabStyle: {
		backgroundColor: 'rgb(148,93,96)'
	},
	tabStyle: {
		backgroundColor: '#F8F8F8'
	},
	keywordText: {
		width, height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	line: {
		flex: 0.25,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	lineHr: {
		height: 1,
		width: 70,
		backgroundColor: 'rgb(221,221,221)'
	},
	keywordContent: {
		height: 170, width: width * 0.95,
		flexDirection: 'row',
		marginLeft: 10, marginRight: 10
	},
	paginationStyle: {
		bottom: 0, justifyContent: 'center', alignItems: 'center'
	},
	keyword: {
		flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
	},
	imageKeyword: {
		width: '33%', height: 115,
	},
	linearGradient: {
		flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center',
	}
});
export default styles;