import React from 'react';
import { View, Text, Button } from 'native-base';

import OutCon from 'react-native-vector-icons/SimpleLineIcons';
import ICon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const ProfileHeadActions = () => {
	const { containerStyle, buttonStyle, iconStyle, backIconStyle, settingIconStyle } = styles;
	return (
		<View style={ containerStyle }>
			<Button style={ buttonStyle }>
				<ICon name='ios-arrow-back' style={ [iconStyle, backIconStyle] }/>
			</Button>
			<Button style={ buttonStyle }>
				<OutCon name='settings' style={ [iconStyle, settingIconStyle] }/>
			</Button>
		</View>
	);

};

export { ProfileHeadActions };

/* USAGE:
* <ProfileHeadActions />
*/
