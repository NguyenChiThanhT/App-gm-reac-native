import React from 'react';
import { View, Text, Thumbnail, Button } from 'native-base';
import { styles } from './styles';


const FollowerItem = (
	{
		authorID = 0,
		authorName = 'Author Name',
		followed = false,
		authorAvatar = null,
	}) => {

	const {
		containerStyle,
		avatarContainerStyle,
		authorNameStyle,
		authorNameContainerStyle,
		buttonStyle,
		ctaContainerStyle,
		buttonTextStyle,
		avatarStyle,
		buttonUnfollowedStyle,
		unfollowedText
	} = styles;

	let avatarRenderer = null,
		followButtonRenderer = null;

	//<editor-fold desc="Render Follow Button">
	if( followed ){
		followButtonRenderer = (
			<Button style={ buttonStyle }>
				<Text style={ buttonTextStyle }>
					フォローする
				</Text>
			</Button>
		);
	} else {
		followButtonRenderer = (
			<Button style={ [ buttonStyle, buttonUnfollowedStyle ] }>
				<Text style={ [buttonTextStyle, unfollowedText] }>
					フォロー中
				</Text>
			</Button>
		);
	}
	//</editor-fold>
	if(authorAvatar == null){
		avatarRenderer = (
			<Thumbnail
				source = { require('../../../../../assets/images/icons/user.png') }
				style={ avatarStyle }
			/>
		);
	} else {
		avatarRenderer = (
			<Thumbnail
				source = { authorAvatar }
				style={ avatarStyle }
			/>
		);
	}

	return (
		<View style={containerStyle}>
			<View style={ avatarContainerStyle }>
				{ avatarRenderer }
			</View>
			<View style={ authorNameContainerStyle }>
				<Text style={authorNameStyle}>
					{ authorName }
				</Text>
			</View>
			<View style={ ctaContainerStyle }>
				{ followButtonRenderer }
			</View>
		</View>
	);
};

export { FollowerItem };
/* USAGE
* <FollowerItem
*				key={'author'+index}
*				authorID={author.ID}
*				authorName={ author.name }
*				authorAvatar={ author.avatar }
*				followed={author.followed}/>
* */
