import React from 'react';
import { View, Text, Button } from 'native-base';
import { styles } from './styles';

const OptionLabel = ({ label, currentValue, onPress }) => {
	return (
		<Button style={ styles.contextContainer }
			onPress={ onPress }>
			<View style={ styles.optionLabel }>
				<Text style={ styles.labelText }>{ label }</Text>
			</View>
			<View style={ styles.selectedOption }>
				<Text style={ styles.selectedText }>{ currentValue }</Text>
			</View>
		</Button>
	);
};

export { OptionLabel };