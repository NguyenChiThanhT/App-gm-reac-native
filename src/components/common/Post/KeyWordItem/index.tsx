import React from 'react';
import {View, Text} from 'native-base';
import { ImageBackground } from 'react-native';

import styles from './styles';

const KeyWordItem = ({imageSrc, keyword}) => {
	return (
			<View style={{padding: 2}}>
				<ImageBackground style={styles.backgroundKeyword} source={imageSrc}>
					<View style={styles.wrapper}>
						<Text style={styles.keyword}>{keyword}</Text>
					</View>
				</ImageBackground>
			</View>
	);
};

export { KeyWordItem };
