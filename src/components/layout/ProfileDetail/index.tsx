import React from 'react';
import { View, Thumbnail, Text, Button } from 'native-base';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import Mcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Acon from 'react-native-vector-icons/AntDesign';

const ProfileDetail = (
	{
		children,
		name = 'name',
		avatar = 'avatar',
		facebookURL = 'facebook.com',
		twitterURL = 'twitter.com',
		instagramURL = 'twitter.com',
		ID = 1,
		statusText = null,
		layoutStyle = 0,
		followed = false,
		leftAction = 1,
		rightAction = 2,
	}) => {

	if( ID == 0){
		return (
			<Text>No User To Show</Text>
		);
	}

	let {
		containerStyle,
		avatarStyle,
		nameStyle,
		iconHolder,
		followButtonStyle,
		followButtonIconStyle,
		followButtonTextStyle,
		socialButtonStyle,
		iconStyle,
		statusTextStyle,
		horizontalLineStyle,
		main,
		side,
		sideActionButton,
		sideActionIcon
	} = styles

	let buttonBuilder = [];
	let statusTextRender = null;
	let followButton = null;
	let statusTextBuilder = null;
	let leftActionButton = null, rightActionButton = null;
	//<editor-fold desc="Social Network Button Set Builder">

	if (instagramURL !== null){
		buttonBuilder.push((
			<Button style={ socialButtonStyle } key={'instagramBtn'}>
				<Icon name ='logo-instagram' style={ iconStyle }/>
			</Button>
		));
	}

	if (twitterURL !== null) {
		buttonBuilder.push((
			<Button style={ {...socialButtonStyle, left: 2} } key={'twitterBtn'}>
				<Icon name ='logo-twitter' style={ iconStyle }/>
			</Button>
		));
	}

	if (facebookURL !== null) {
		buttonBuilder.push((
			<Button style={ socialButtonStyle } key={'facebookBtn'}>
				<Mcon name ='facebook' style={ {...iconStyle, fontSize: 24, bottom: 1, right: 0} }/>
			</Button>
		));
	}



	//</editor-fold>
	//<editor-fold desc="Status Element Builder">
	if(statusText !== null){
		statusTextRender = (
			<Text style={ statusTextStyle }>{statusText}</Text>
		)
	}
	//</editor-fold>
	//<editor-fold desc="Follow Button Builder">
	if (!followed) {
		followButton = (
			<Button style={ followButtonStyle }>
				<Acon name ='user' style={ followButtonIconStyle }/>
				<Text style={ followButtonTextStyle }>フォローする</Text>
			</Button>
		);
	}
	//</editor-fold>
	//<editor-fold desc="Status Text">
	if(statusText !== null){
		statusTextBuilder = [(
			<View style={ horizontalLineStyle }/>
		)]
		statusTextBuilder = statusTextBuilder.concat( statusText.map((value, index) => {
			return (
				<Text key={'statusLine' + index} style={statusTextStyle}>
					{value}
				</Text>
			);
		}));
	}
	//</editor-fold>
	if ( leftAction !== null ) {
		leftActionButton = (
			<Button style={ sideActionButton }>
				<Icon name='ios-arrow-back' style={ sideActionIcon }/>
			</Button>
		);
	}

	if ( rightAction !== null ) {
		rightActionButton = (
			<Button style={ sideActionButton }>
				<Icon name='ios-arrow-forward' style={ sideActionIcon }/>
			</Button>
		);
	}


	return (
		<View style={ containerStyle }>
			<View style={ side }>
				{ leftActionButton }
			</View>
			<View  style={ main }>
				<Thumbnail source={ avatar } style={ avatarStyle }/>
				<Text style={ nameStyle }>{ name }</Text>
				{ followButton }
				<View style={ iconHolder }>
					{ buttonBuilder }
				</View>
				{ statusTextBuilder }
			</View>
			<View style={ side }>
				{ rightActionButton }
			</View>
		</View>
	);

};

export { ProfileDetail };

/* USAGE:
* <ProfileDetail
* 	ID : number                                               (Required)
* 	followed : bool                                           (Required)
* 	leftAction: any	                                          (Optional)
*   rightAction: any	                                      (Optional)
* 	name : string                                             (Optional)
* 	avatar: any <require([ AVATAR_DIRECTORY ])>               (Optional)
* 	facebookURL: string                                       (Optional)
* 	instagramURL: string                                      (Optional)
* 	twitterURL: string                                        (Optional)
* 	layoutStyle: number                                       (Optional)
* 	statusText: string	                                      (Optional)
* />
*/
