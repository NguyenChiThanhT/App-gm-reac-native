import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles';
import {Icon, P} from '../../';
import STYLE_REF from '../../../variables';

const TouchableOpacityButton = ({text}) => {
	return (
			<TouchableOpacity style={styles.button}>
				<P> {text} </P>
				<Icon name='ios-arrow-forward' style={{color: STYLE_REF.GRAY}}/>
			</TouchableOpacity>
	);
};

export { TouchableOpacityButton };
