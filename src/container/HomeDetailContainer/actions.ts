export function postsLoad( postsData ) {
	return {
		type: 'POSTS_LOADED',
		posts: postsData,
	};
}

export function postsLoadFinish(){
	return {
		type: 'USER_LOAD_FINISH',
	};
}

export function fetchPosts(postsData) {
	return dispatch => {
		dispatch( postsLoad(postsData) );
		dispatch( postsLoadFinish() );
	};
}
