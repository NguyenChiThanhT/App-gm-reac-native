import { StyleSheet } from 'react-native';
import STYLE_REF from '../../../components/variables';

const styles: any = StyleSheet.create({
	containerStyle: { backgroundColor: STYLE_REF.WHITE },
	contentHolderStyle: { paddingTop: 30 },
	adStyle: {
		width: STYLE_REF.ADS_WIDTH,
		height: STYLE_REF.ADS_HEIGHT,
		backgroundColor: '#999',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	tagHolder: { flexDirection : 'row', flexWrap: 'wrap' },
});
export default styles;
