import React from 'react';
import { View } from 'native-base';

import { PostItemSmall, Gap } from '../../common/';
const MiniPostList = ({ list }) => {
	let postListBuilder = null;
	if ( list.length > 0 ) {
		postListBuilder = list.map((postItem, index) => {
			return(
				<PostItemSmall
					imageSrc={ postItem.postFeaturedImage }
					title={ postItem.postTitle }
					author={ postItem.postAuthor }
					key = {'postIndex-'+index}
					postID={postItem.postID} />
			);
		});
	}

	return (
		<View style={}>
			<Gap height={10}/>
			{postListBuilder}
		</View>
	);
};

export { MiniPostList };

/* USAGE:
* <ProfileHeadActions />
*/
