// This component is used in AddPost screen component
import React, {Component} from 'react';
import {View, Text, Thumbnail} from 'native-base';

import {Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

const ImageOptionLabel = ({imgSrc, imgAlt}) => {
	return (
		<View style={styles.containerStyle}>
			<View style={styles.thumbnailHolder}>
				<Image source={imgSrc}
							 style={styles.thumbnailImage}/>
			</View>

			<View style={styles.rightContent}>
				<Text style={styles.altText}>{imgAlt}</Text>
				<Icon name="ios-arrow-forward"
							size={20}
							color="#aaa"/>
			</View>
		</View>
	);
};

export {ImageOptionLabel};
