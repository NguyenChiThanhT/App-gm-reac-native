const initState = {
	user: {
		ID: 10,
		name: 'Loading',
		facebookURL: '#',
		instagramURL: '#',
		twitterUR: '#',
		avatar: require('../../../assets/images/icons/user.png'),
		statusText: ['ここにコメントが入ります。', '自己紹介分にはキャリア絵文字が使えるといいな。'],
		followers: [],
		followed: [],
		recentPost: [],
	},
	isLoading: true,
};

function profileReducer(state = initState, action) {
	switch (action.type) {
		case 'USER_PENDING':
			return {
				...state,
				isLoading: action.isLoading,
			}
		case 'USER_LOADED':
			return {
				...state,
				user: action.user,
			};
		case 'USER_LOAD_FINISH':
			return {
				...state,
				isLoading: false,
			}
		default:
			return state;
	}
}

export default profileReducer;
