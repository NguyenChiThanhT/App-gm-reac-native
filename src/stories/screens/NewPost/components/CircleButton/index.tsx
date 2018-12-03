import React from 'react';
import { Text, Image } from 'react-native';
import styles from './styles';
import { Button } from 'native-base';

const CircleButton = ({ buttonText, buttonImageFunction, onPress }) => {
	return (
		<Button style={ styles.CircleButton } onPress={onPress}>
			<Image source={ buttonImageFunction } style={ styles.ButtonImage } />
			<Text style={ styles.ButtonText }>
				{ buttonText }
			</Text>
		</Button>
	);
};

export { CircleButton };