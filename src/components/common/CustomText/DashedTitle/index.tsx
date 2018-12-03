import React from 'react';
import { View, Text } from 'native-base';
import { styles } from './styles';

// TODO: Check multiple condition, adjust to make sure no broken layout
const DashedTitle = ({ text, alignText='center' }) => {
	let alignStyle = null;
	switch(alignText){
		case 'left':
			alignStyle = {alignItems: 'flex-start'};
			break;
		case 'right':
			alignStyle = {alignItems: 'flex-end'};
			break;
		default:
			alignStyle = null;
			break;
	}
	return (
		<View style={[styles.titleHolder, alignStyle]}>
			<View style={styles.dashed}/>
			<View style={styles.textHolder} >
				<Text style={styles.text}>
					{ text }
				</Text>
			</View>
		</View>
	);
};

export { DashedTitle };
