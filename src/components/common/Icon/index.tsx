import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import Ioncon from 'react-native-vector-icons/Ionicons';
import Fcon from 'react-native-vector-icons/FontAwesome';
import Lcon from 'react-native-vector-icons/SimpleLineIcons';
import Mcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({ name = '', type = '', style}) => {
	let renderIcon = {};
	switch ( type ) {
		case 'fa':
			renderIcon = (<Fcon name = { name } style={ [styles.iconStyles , style] }/>);
		break;
		case 'line':
			renderIcon = (<Lcon name = { name } style={ [styles.iconStyles , style] }/>);
			break;
		case 'mat':
			renderIcon = (<Mcon name = { name } style={ [styles.iconStyles , style] }/>);
			break;
		default:
			renderIcon = (<Ioncon name ={ name } style={ [styles.iconStyles , style] }/>);
			break;
	}
	return (
		<Text>
			{ renderIcon }
		</Text>
	);
};

export { Icon };
