import { Dimensions } from "react-native";

const styles: any = {
	fullScreenBackgroundImage: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	fullscreenOverlay: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.45)',
		flexDirection: 'column',
		padding: 10,
	}
};

export default styles;
