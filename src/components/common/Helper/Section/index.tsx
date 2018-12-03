import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Section = ({ children, padding = 10 }) => {
	return (
		<View style={{ ...styles.containerStyle, paddingHorizontal: padding }}>
			{ children }
		</View>
	);
};

export { Section };
