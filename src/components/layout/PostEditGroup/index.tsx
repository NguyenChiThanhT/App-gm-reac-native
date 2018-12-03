import React from 'react';
import { View } from 'native-base';
import { PostActionGroup, PostActionAdd, Gap } from '../../common';


const PostEditGroup = ( { children } ) => {
	return (
		<View>
			{ children }
			<View>
				<PostActionGroup />
			</View>
			<Gap height={20} />
			<View>
				<PostActionAdd />
			</View>
		</View>
	);
};

export { PostEditGroup };
