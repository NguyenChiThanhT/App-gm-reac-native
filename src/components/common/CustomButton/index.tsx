import React from 'react';
import styles from './styles';
import { Button, View, Text } from 'native-base';
import STYLE_REF from '../../variables';

const CustomButton = (
	{
		onPress = null,
		size = 'normal',
		type = 'normal',
		btnText= '',
		children,
		block = true,
		style
	}) => {
	let styleBuilder = { ...styles.btn },
		textStyleBuilder = { ...styles.textStyle }
	switch (size) {
		case 'lg':
			styleBuilder = { ...styleBuilder, height: 48 };
			textStyleBuilder = { ...textStyleBuilder, lineHeight: 48 };
			break;
		case 'sm':
			styleBuilder = { ...styleBuilder, height: 32 };
			textStyleBuilder = { ...textStyleBuilder, lineHeight: 32 };
			break;
		default:
			styleBuilder = { ...styleBuilder, height: 40 };
			textStyleBuilder = { ...textStyleBuilder, lineHeight: 40 };
			break;
	}

	switch (type) {
		case 'ghost':
			styleBuilder = { ...styleBuilder, backgroundColor: STYLE_REF.TRANSPARENT, borderColor: STYLE_REF.RED, color: STYLE_REF.RED};
			textStyleBuilder = { ...textStyleBuilder, color:  STYLE_REF.RED };
			break;
		case 'disabled':
			styleBuilder = { ...styleBuilder, backgroundColor: STYLE_REF.DARK_GRAY, borderColor: STYLE_REF.DARK_GRAY };
			textStyleBuilder = { ...textStyleBuilder, color: STYLE_REF.WHITE };
			break;
		default:
			break;
	}

	if ( !block ) {
		styleBuilder = { ...styleBuilder, alignSelf: 'center'};
	}
	return (
		<View>
			<Button style={ {...styleBuilder, style} } onPress={onPress}>
				{ children }
				<Text style={ {...textStyleBuilder, style} }>
					{ btnText }
				</Text>
			</Button>
		</View>
	);
};

export { CustomButton };
/* USAGE
*
* */
