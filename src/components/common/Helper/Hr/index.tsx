import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Hr = ({
		marginTop = 5,
		marginBottom = 10,
	}) => {
	return (
		<View style={{...styles.hrStyle, marginTop: marginTop, marginBottom: marginBottom}}/>
	)
};

export { Hr };
