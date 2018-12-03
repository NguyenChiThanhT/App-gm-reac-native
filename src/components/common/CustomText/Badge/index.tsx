import React from 'react';
import { View } from 'react-native';
import { Small } from '../../';

import styles from './styles';

const Badge = ({ text = null, style = null }) => {
	let hiddenStyle = null;
	if ( text === null ){
		hiddenStyle = { display: 'none' };
	}
	return (
		<View style={ [styles.badge, style, hiddenStyle] }>
			<Small badge>{text}</Small>
		</View>
	);
};

export { Badge };
