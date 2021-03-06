import {Dimensions} from 'react-native';

const DEVICE_INFO = {
	SCREEN_WIDTH: Dimensions.get('window').width,
	SCREEN_HEIGHT: Dimensions.get('window').height,
}

const STYLE_REF = {
	RED: '#945D60',
	LIGHT_RED: '#D1BCBE',
	WHITE: '#FFFFFF',
	LIGHT_WHITE: '#F9F9F9',
	BLACK: '#3B3B3B',
	GRAY: '#999999',
	LIGHT_GRAY: '#CCCCCC',
	DARK_GRAY: '#8B8B8B',
	BORDER_COLOR: '#EEEEEE',
	TAG_BACKGROUND: '#F1F1F1',
	TRANSPARENT: 'rgba(0,0,0,0)',
	BORDER_RADIUS: 3,
	SCREEN_WIDTH:  DEVICE_INFO.SCREEN_WIDTH,
	SCREEN_HEIGHT: DEVICE_INFO.SCREEN_HEIGHT,
	INNER_CONTENT: DEVICE_INFO.SCREEN_WIDTH - 20,
	CONTAINER_PADDING_HORIZONTAL: 10,
	YOUTUBE_WIDTH: DEVICE_INFO.SCREEN_WIDTH - 20,
	YOUTUBE_HEIGHT: (DEVICE_INFO.SCREEN_WIDTH - 20) * 9 / 16,
	ADS_WIDTH:  DEVICE_INFO.SCREEN_WIDTH - 20,
	ADS_HEIGHT: 172
}

export default STYLE_REF;
