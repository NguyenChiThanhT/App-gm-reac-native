import * as React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';

import {GroupButtonFavorateStar} from '../../CustomButton/GroupButtonFavorateStar';

import { P, FollowerItem, Small, Section, Icon } from '../../';

const PostItem = ({postData}) => {
	/* renderAuthor */
	let renderAuthor = null;
	if ( postData.author !== undefined){
		renderAuthor = (
			<FollowerItem
				authorID={ postData.author.ID }
				authorName={ postData.author.authorName }
				authorAvatar={ postData.author.authorAvatar }
				followed={ postData.author.followed }/>
		);
	}

	/* Render Featured Image */
	let renderFeaturedImage = null
	if ( postData.featureImage !== undefined){
		renderFeaturedImage = (
				<ImageBackground source={ postData.featureImage }
							style={{width: '100%', height: 225, justifyContent: 'flex-end'}}>
					<View style={ styles.featureImageTag }>
						<Icon style={ [styles.redText, styles.tagIcon] } type={'line'} name='pencil'/>
						<P style={ [styles.redText, styles.tagText] } bold>連載</P>
					</View>
				</ImageBackground>
		);
	}

	/* Render Content */
	let titleRender = null;
	let excerptRender = null;
	if ( postData.postTitle !== undefined ){
		titleRender = (<Text style={ [styles.postTitle, styles.redText] }>{ postData.postTitle }</Text>);
	}

	if ( postData.postContent !== undefined ){
		excerptRender =  (<Text style={ styles.postExcerpt }>{ postData.postContent }</Text>);
	}

	/* Render Like And Favorite Button */
	let likeAndShareRender = null;
	if ( postData.liked !== undefined && postData.favorite !== undefined ){
		likeAndShareRender = (<GroupButtonFavorateStar numberOfHeart={ postData.liked } numberOfStar={ postData.favorite } />)
	}

	/* Render Post Date */
	let editDate = null;
	if ( postData.editDate ) {
		editDate = (
			<View style={styles.bottomContent}>
				<Small style={styles.createAt}> { postData.editDate } </Small>
			</View>
		);
	}
	return (
		<Section>
			{ renderFeaturedImage }
			{ titleRender }
			{ excerptRender }
			{ renderAuthor }
			{ likeAndShareRender }
			{ editDate }
		</Section>
	);
};

export { PostItem };
