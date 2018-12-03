import React from 'react';
import styles from './styles';
import { Button, View, Text } from 'native-base';

const Tag = (
	{
		onPress = null,
		text = '',
	}) => {
	return (
		<Button style = {styles.tag} onPress={ onPress }>
			<Text style={styles.tagText}>{text}</Text>
		</Button>
	);
};

export { Tag };
/* USAGE
*	<Tag text={<String>} />
* */
