import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const P = ({ children, style, bold = false }) => {
	let boldStyle = null;
	if ( bold ) {
		boldStyle = { fontWeight: 'bold' };
	}
	return (
		<Text style={ [styles.textStyles, style, boldStyle] }>
			{ children }
		</Text>
	);
};

export { P };
