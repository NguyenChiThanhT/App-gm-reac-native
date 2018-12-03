import React from 'react';
import { View, Text, Button } from 'native-base';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const PostActionAdd = () => {
	return (
		<View style={ styles.groupContainer }>
			<View style={ styles.dashedStyle }/>
			<View style={ styles.dashedStyleBottom }/>
			<View>
				<Button style={ styles.buttonStyle }>
					<Icon name='ios-add' style={ styles.iconStyle }/>
					<Text style={ styles.textStyle }>
						ここに追加
					</Text>
				</Button>
			</View>
		</View>
	);
};

export { PostActionAdd };
