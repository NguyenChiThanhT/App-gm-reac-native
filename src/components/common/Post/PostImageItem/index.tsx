import * as React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const PostItemSmall = ({imageSrc, title, author}) => {
	let {
		containerStyle,
		imageContainerStyle,
		imageStyle,
		postContentContainerStyle,
		postTitleStyle,
		postSubTitleStyle
	} = styles;
	return (
			<View style={ containerStyle }>
				<View style={ imageContainerStyle }>
					<Image style={ imageStyle } source={imageSrc}/>
				</View>
				<View style={ postContentContainerStyle }>
					<Text style={postTitleStyle}>{title}</Text>
					<Text style={postSubTitleStyle}>{author}</Text>
				</View>
			</View>
	);
};

export { PostItemSmall };
