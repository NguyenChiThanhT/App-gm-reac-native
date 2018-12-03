import React from 'react';
import { View, Text } from 'react-native';
import { FooterTab, Button } from 'native-base';
import { Icon } from '../../index';

import { styles } from './styles';

const FooterAction = ({ iconName, iconType, actionText, onPress, active }) => {
	// Normal Color for Text And Icon, get overwritten if is the active page
	// TODO: Check Correct Icon Compare to client design
	let color = '#999999';
	if (active) {
		color = '#3C3C3C';
	}
	return (
		<FooterTab style={ styles.FooterTab }>
			<View style={ styles.FooterContent }>
				<Button onPress = { onPress }>
					<Icon name={ iconName } type={ iconType } style={ {color: color} }/>
					<Text style={ {...styles.FooterText, color: color} }>
						{ actionText }
					</Text>
				</Button>
			</View>
		</FooterTab>
	);
};

export { FooterAction };
