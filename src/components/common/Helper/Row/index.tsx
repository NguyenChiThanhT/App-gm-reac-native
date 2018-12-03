import React from 'react';
import { View } from 'react-native';
import STYLE_REF from '../../../variables';

const Row = ({children, bordered, centered, marginBottom = 0, style}) => {
	let borderStyle = null,
		centeredStyle = null,
		styleBasic =  {flexDirection: 'row', marginBottom: marginBottom};
	if ( bordered ) {
		borderStyle ={
			borderWidth: 1,
			borderColor: STYLE_REF.BORDER_COLOR,
			borderRadius: STYLE_REF.BORDER_RADIUS,
			paddingHorizontal: 5,
			paddingVertical: 10,
		};
	}
	if ( centered ) {
		centeredStyle = { justifyContent: 'center', alignItems: 'center' }
	}

	return (
		<View style={[styleBasic, centeredStyle, borderStyle, style]}>
			{ children }
		</View>
	);
};

export { Row };
/* Usage
* Use with <Column size={ <RelativeColumnSize: number> }>
* or Use as <View style={ {flexDirection: 'row'} }> replacement
* EXP:
* <View style={ {flexDirection: 'row', justifyContent: 'center'} }>
* can be replaced with
* <Row centered>
* Add Border Using
* <Row bordered>
*/
