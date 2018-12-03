import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const H1 = ({ children, style, color }) => {
	return (
		<Text style={ [styles.textStyles, style] }>
			{ children }
		</Text>
	);
};

export { H1 };
