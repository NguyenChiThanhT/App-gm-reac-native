import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const H2 = ({ children, style }) => {
	return (
		<Text style={ [styles.textStyles, style] }>
			{ children }
		</Text>
	);
};

export { H2 };
