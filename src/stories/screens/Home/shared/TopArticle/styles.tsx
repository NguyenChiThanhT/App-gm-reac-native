import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');

const styles: any = StyleSheet.create({
	container: {
		width: width, height: 230, flexDirection: 'column',
	},
	content: {
		flex: 0.55, width: width, flexDirection: 'column',
		justifyContent: 'flex-end', alignItems: 'flex-start',
	},
	stylesCooking: {
		width: 54, height: 25, backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center', borderRadius: 2, paddingHorizontal: 3,
	},
	textContent: {
		flex: 0.4, width: 260,
		marginLeft: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	footer: {
		flex: 0.3, marginLeft: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	lineHr: {
		width: 260, height: 1,
		backgroundColor: '#FFFFFF',
	},
	textIcon: {
		color: '#945D60', fontSize: 11, paddingLeft: 10,
	},
	keywordText: {
		width, height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	line: {
		width: 260, height: 25, justifyContent: 'flex-end',
	},
});
export default styles;