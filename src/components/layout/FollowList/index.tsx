import React from 'react';
import { Text, View} from 'native-base';

import { FollowerItem, Gap } from '../../common/';

const FollowList = ({ list }) => {
	let AuthorListBuilder = list.map((author, index) => {
		return (
			<FollowerItem
				key={'author'+index}
				authorID={author.ID}
				authorName={ author.name }
				authorAvatar={ author.avatar }
				followed={author.followed}/>
		);
	})
	return (
		<View>
			<Gap height={10}/>
			<View>
				{AuthorListBuilder}
			</View>
		</View>
	);
};

export { FollowList };

/* USAGE:
* <ProfileHeadActions />
*/
