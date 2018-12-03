import React from 'react';
import { View } from 'react-native';

const Column = ({ children, size = 1, order = null, style }) => {
	let paddingLeft, paddingRight;
	switch(order){
		case 'first':
			paddingLeft = 0;
			paddingRight = 5;
			break;
		case 'last':
			paddingLeft = 5;
			paddingRight = 0;
			break;
		default:
			paddingLeft = 5;
			paddingRight = 5;
			break;
	}
	return (
		<View style={{...style, flex: size, paddingLeft: paddingLeft, paddingRight: paddingRight}}>
			{ children }
		</View>
	);
};

export { Column };
