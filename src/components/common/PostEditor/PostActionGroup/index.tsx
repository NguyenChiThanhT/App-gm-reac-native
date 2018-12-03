import React from 'react';
import { View, Text, Button } from 'native-base';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

const PostActionGroup = () => {
	return (
		<View style={ styles.groupContainer }>
			<View style={ styles.actionGroup }>
				<Button style={ styles.changeOrderBtn }>
					<Icon name='ios-arrow-up' style={ styles.orderIcon }/>
				</Button>
				<Button style={ styles.changeOrderBtn }>
					<Icon name='ios-arrow-down' style={ styles.orderIcon }/>
				</Button>
			</View>
			<View style={ {...styles.actionGroup, justifyContent: 'flex-end'} }>
				<Button style={ styles.trashAction }>
					<Icon name='ios-trash' style={ styles.trashIcon }/>
				</Button>
				<Button style={ styles.editAction }>
					<Icon name='md-create' style={ styles.iconEdit }/>
					<Text style={ styles.editText }>編集する</Text>
				</Button>
			</View>
		</View>
	);
};

export { PostActionGroup };
