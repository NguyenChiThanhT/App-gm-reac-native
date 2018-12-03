// DUMMIES DATA, BUILD GETTER FUNCTION LATER
const PostService = {
	getFeaturePost: postNeeded => {
		return [
			{
				featureImage: require('../../../assets/images/MaskGroup56.png'),
				postTitle: 'パリ在住のシェフ：Carrie Solomon The Socialite Familyシリーズ',
				postContent: '連載１回目はThe Socialite Familyが送る、パリに住んでいるシェフ、フォトグラファー、ライターとしてELLEやNew York Timesなどで活動しているCarrie Solomonのインタビュー記事とおすすめレシピをお届けします',
				editDate: '作成：2018.1.23',
				liked: 45,
				favorite: 2645,
				author: {
					ID: 1,
					authorName: 'Carrie Solomon',
					authorAvatar: require('../../../assets/images/avatar.png'),
					followed: true,
				},
			},
			{
				postContent: '連載１回目はThe Socialite Familyが送る、パリに住んでいるシェフ、フォトグラファー、ライターとしてELLEやNew York Timesなどで活動しているCarrie Solomonのインタビュー記事とおすすめレシピをお届けします',
				liked: 45,
				favorite: 2645,
			},
		];
	},
	getPostList: condition => {
		return [
			{
				featureImage: require('../../../assets/images/MaskGroup14.png'),
				postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…',
				category: '美容' ,
				author: {
					authorName: 'and_me',
				},
			},
			{
				featureImage: require('../../../assets/images/MaskGroup14.png'),
				postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…',
				category: '美容' ,
				author: {
					authorName: 'and_me',
				},
			},
			{
				featureImage: require('../../../assets/images/MaskGroup14.png'),
				postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…',
				category: '美容' ,
				author: {
					authorName: 'and_me',
				},
			},
		];
	},
	getRankedPostList: postNeeded => {
		return [
			{
				featureImage: require('../../../assets/images/MaskGroup14.png'),
				postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…',
				category: '美容' ,
				rank: 1,
				author: {
					authorName: 'and_me',
				},
			},
			{
				featureImage: require('../../../assets/images/MaskGroup14.png'),
				postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…',
				category: '美容' ,
				rank: 2,
				author: {
					authorName: 'and_me',
				},
			},
			{
				featureImage: require('../../../assets/images/MaskGroup14.png'),
				postTitle: '【100均】レジンとマニキュアで夏アクセ☆塗るだけ簡単♪…',
				category: '美容' ,
				rank: 3,
				author: {
					authorName: 'and_me',
				},
			},
		];
	},
};

export { PostService };
