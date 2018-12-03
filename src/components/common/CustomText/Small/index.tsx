import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import STYLE_REF from '../../../variables';

const Small = ({ children, style, badge = false, bold }) => {
	let badgeStyle = null;
	let boldStyle = null;
	if ( badge ) {
		badgeStyle = {
			fontSize: 10,
			lineHeight: 18,
			color: STYLE_REF.WHITE,
			top: 5,
		};
	}
	if ( bold ) {
		boldStyle = {fontWeight: 'bold'};
	}
	return (
		<Text style={ [styles.textStyles, badgeStyle, boldStyle, style] }>
			{ children }
		</Text>
	);
};

export { Small };
