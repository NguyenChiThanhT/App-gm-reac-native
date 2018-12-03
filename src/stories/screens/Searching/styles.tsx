import {Dimensions, StyleSheet} from 'react-native';
const { width } = Dimensions.get('window');

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: width,
	},
	wrapperTouchableOpacityButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: width,
	},
});
export default styles;
