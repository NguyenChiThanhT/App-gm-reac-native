// DUMMIES DATA, BUILD GETTER FUNCTION LATER
const profileService = {
	getUserByID: ID => {
		return {
			ID: 10,
			name: 'Nihato',
			facebookURL: 'facebook.com/nhat.tran.94',
			instagramURL: 'instagram.com/nhat.tran.94',
			twitterURL: 'twitter.com/nhat.tran.94',
			website1: 'abc.com',
			website2: 'xyz.com',
			avatar: require('../../../assets/images/Profile/avatar1.png'),
			statusText: ['ここにコメントが入ります。', '自己紹介分にはキャリア絵文字が使えるといいな。'],
			followers: [
				{ ID: 1, name: 'Carrie Solomon' , followed: true, avatar: require('../../../assets/images/Profile/avatar2.png') },
				{ ID: 2, name: 'aya_ayachin0426' , followed: true, avatar: require('../../../assets/images/Profile/avatar2.png') },
				{ ID: 3, name: 'Nihato93' , followed: false, avatar: require('../../../assets/images/Profile/avatar3.png') },
				{ ID: 4, name: 'AnAn' , followed: true, avatar: require('../../../assets/images/Profile/avatar4.png') },
				{ ID: 5, name: 'Tuan' , followed: true, avatar: null },
				{ ID: 6, name: 'Adam The Forgotten' , followed: false, avatar: require('../../../assets/images/Profile/avatar4.png')}
			],
			followed: [
				{ ID: 1, name: 'Carrie Solomon' , followed: true, avatar: require('../../../assets/images/Profile/avatar2.png') },
				{ ID: 2, name: 'aya_ayachin0426' , followed: true, avatar: require('../../../assets/images/Profile/avatar2.png') },
				{ ID: 3, name: 'Nihato93' , followed: false, avatar: require('../../../assets/images/Profile/avatar3.png') },
				{ ID: 4, name: 'AnAn' , followed: true, avatar: require('../../../assets/images/Profile/avatar4.png') },
				{ ID: 5, name: 'Tuan' , followed: true, avatar: null },
				{ ID: 6, name: 'Adam The Forgotten' , followed: false, avatar: require('../../../assets/images/Profile/avatar4.png')}
			],
			recentPost: [
				{
					postID: 1, postFeaturedImage: require('../../../assets/images/Profile/pos2.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'Nihato',
				},
				{
					postID: 2, postFeaturedImage: require('../../../assets/images/Profile/post1.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
				{
					postID: 3, postFeaturedImage: require('../../../assets/images/Profile/post4.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
				{
					postID: 4, postFeaturedImage: require('../../../assets/images/Profile/post3.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
				{
					postID: 6, postFeaturedImage: require('../../../assets/images/Profile/post1.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
				{
					postID: 7, postFeaturedImage: require('../../../assets/images/Profile/post3.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
				{
					postID: 8, postFeaturedImage: require('../../../assets/images/Profile/post4.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
				{
					postID: 9, postFeaturedImage: require('../../../assets/images/Profile/post4.png'),
					postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…', postAuthor: 'and_me',
				},
			],
		};
	},
	getUserRecentPostByID: ID => {},
	getUserDetailByID: ID => {},
	getUserFollowerByID: ID => {},
};

export { profileService };
