import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
	tab: {
		height: 49,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20
	},
	container: {
		height: 50,
		borderWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderColor: '#ccc'
	},
	tabs: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	}
});
export default styles;
//# sourceMappingURL=styles.js.map
